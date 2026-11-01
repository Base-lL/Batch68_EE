import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Element } from "hast"

export const ImageCaptions: QuartzTransformerPlugin = () => {
  return {
    name: "ImageCaptions",
    htmlPlugins() {
      return [
        () => (tree) => {
          visit(tree, "element", (node: Element, index, parent: Element | undefined) => {
            if (node.tagName === "p" && parent && typeof index === "number") {
              const imgIndex = node.children.findIndex(
                (c) => c.type === "element" && (c as Element).tagName === "img"
              )

              if (imgIndex !== -1) {
                const leadingChildren = node.children.slice(0, imgIndex)
                const imgNode = node.children[imgIndex]
                const trailingChildren = node.children.slice(imgIndex + 1)

                const captionChildren: any[] = []
                const remainingChildren: any[] = []
                let inCaption = true

                for (const child of trailingChildren) {
                  if (!inCaption) {
                    remainingChildren.push(child)
                    continue
                  }

                  if (child.type === "text") {
                    let textVal = (child as any).value

                    // Strip the initial newline immediately following <img>
                    if (captionChildren.length === 0) {
                      textVal = textVal.replace(/^\r?\n/, "")
                    }

                    const newlineIndex = textVal.indexOf("\n")
                    if (newlineIndex !== -1) {
                      const captionPart = textVal.slice(0, newlineIndex)
                      const remainingPart = textVal.slice(newlineIndex + 1)

                      if (captionPart !== "") {
                        captionChildren.push({ type: "text", value: captionPart })
                      }
                      if (remainingPart !== "") {
                        remainingChildren.push({ type: "text", value: remainingPart })
                      }
                      inCaption = false
                    } else {
                      if (textVal !== "") {
                        captionChildren.push({ type: "text", value: textVal })
                      }
                    }
                  } else {
                    captionChildren.push(child)
                  }
                }

                const hasLeading = leadingChildren.some(
                  (n) => n.type !== "text" || (n as any).value.trim() !== ""
                )
                const hasCaption = captionChildren.some(
                  (n) => n.type !== "text" || (n as any).value.trim() !== ""
                )
                const hasRemaining = remainingChildren.some(
                  (n) => n.type !== "text" || (n as any).value.trim() !== ""
                )

                const replacementNodes: Element[] = []

                // 1. Text before image -> isolated <p>
                if (hasLeading) {
                  replacementNodes.push({
                    type: "element",
                    tagName: "p",
                    properties: { ...node.properties },
                    children: leadingChildren,
                  })
                }

                // 2. Image + first line -> <figure> with <figcaption>
                if (hasCaption) {
                  replacementNodes.push({
                    type: "element",
                    tagName: "figure",
                    properties: { className: ["image-figure"] },
                    children: [
                      imgNode,
                      {
                        type: "element",
                        tagName: "figcaption",
                        properties: { className: ["image-caption"] },
                        children: captionChildren,
                      },
                    ],
                  })
                } else if (hasLeading || hasRemaining) {
                  replacementNodes.push({
                    type: "element",
                    tagName: "p",
                    properties: { ...node.properties },
                    children: [imgNode],
                  })
                }

                // 3. Second line onwards -> isolated <p>
                if (hasRemaining) {
                  replacementNodes.push({
                    type: "element",
                    tagName: "p",
                    properties: { ...node.properties },
                    children: remainingChildren,
                  })
                }

                if (replacementNodes.length > 0) {
                  parent.children.splice(index, 1, ...replacementNodes)
                }
              }
            }
          })
        },
      ]
    },
  }
}
