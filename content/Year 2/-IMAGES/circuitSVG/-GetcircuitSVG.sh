#!/bin/bash
set -e

# PUBLIC
FILENAME="OP_AMP_buffer"

# PRIVATE
build_dir=".build"

latex -interaction=nonstopmode -output-directory="${build_dir}" ${FILENAME}.tex
dvisvgm --no-fonts --exact-bbox "${build_dir}/${FILENAME}.dvi" -o "${FILENAME}.svg"
gwenview "${FILENAME}.svg"
exit
