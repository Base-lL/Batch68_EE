---
tags:
  - year2-Sem1
  - Networks
---

# 1. What is the Internet?

The internet can be described from two perspectives:
## Nuts-and-Bolts View

**End systems (hosts):** Devices connected at the *network's edge* running applications
*example*:
- PCs
- servers
- IoT devices
- mobile phones

**Packet switches:** Intermediary devices that forward chunks of data *(packets)* through the *network core*
*example*:
- routers
- switches

**Communication links:** Physical media carrying signals at specific transmission rates (*bandwidth* measured in bits/sec)
*example*:
- fiber optic
- copper wire
- radio spectrum.

**Networks of networks:** Interconnected *I*nternet *S*ervice *P*roviders *(ISPs)* managed by various organizations.
## Service View

An infrastructure that provides services to distributed applications:
- Web
- *v*oice *o*f *i*nternet *p*rotocol *(VoIP)*
- email
- gaming
- streaming
Provides an *A*pplication *P*rogramming *I*nterface *(API)* allowing software programs to send and receive data across the infrastructure.

## Network Protocols
A Set of rules defining the format, order of messages sent/received, and actions taken, example:
- TCP
- HTTP
- SMTP
- IP
Internet standards are developed by the **IETF** (*I*nternet *E*ngineering *T*ask *F*orce) and documented in **RFCs** (*R*equest *f*or *C*omments).

# 2. Network Edge
Access networks physically connect end systems to the first router (edge router) on the path to the network core.

| **Access Technology**             | **Media**                                       | **Downstream / Upstream Rates**    | **Shared / Dedicated**      |
| --------------------------------- | ----------------------------------------------- | ---------------------------------- | --------------------------- |
| **DSL** (Digital Subscriber Line) | Existing telephone line to Central Office DSLAM | Asymmetric (Downstream > Upstream) | Dedicated line              |
| **Cable Network** (HFC)           | Hybrid Fiber-Coaxial cable to CMTS              | Asymmetric                         | Shared distribution network |
| **FTTH** (Fiber To The Home)      | Direct Optical Fiber (OLT to ONT via splitter)  | Gbps range                         | Dedicated/Shared path       |
| **Enterprise Ethernet**           | Twisted-Pair (Cat 5/6) to switches              | 100 Mbps, 1 Gbps, 10 Gbps          | Dedicated to switch port    |
| **Wireless LAN** (WiFi 802.11)    | Radio spectrum (~10–100 m)                      | 11 Mbps to 450+ Mbps               | Shared wireless channel     |
| **Cellular** (4G/5G)              | Radio spectrum to telco base station (~10s km)  | 10s–100s Mbps                      | Shared wireless channel     |
## Physical Media Classification

**Guided Media:** Signals propagate through solid physical channels
*example*:
- Copper Twisted-Pair Cat 5/6
- Coaxial Cable
- Fiber Optic
**Unguided Media:** Signals propagate freely through atmosphere or outer space
*example*:
- Wireless LAN *WiFi*
- Cellular 4G/5G
- Bluetooth
- terrestrial Microwave
-  *l*ow-*e*arth *o*rbiting *(LEO)* and geostationary satellites

> [!important]
> When choosing physical media for a LAN, consider these 4 factors:
> 1.  Distance
> 2.  Environment
> 3.  Cost
> 4.  Bandwidth

| **Media Type**                | **Cost**                     | **Bandwidth**          | **Distance**                                | **Immune to Interference?**                                   |
| ----------------------------- | ---------------------------- | ---------------------- | ------------------------------------------- | ------------------------------------------------------------- |
| **UTP**                       | Cheapest guided media        | 10 Mbps to 10 Gbps     | Up to 100 meters                            | No                                                            |
| **Fiber Optics**              | Highest cost in guided media | Up to 100 Gbps         | Up to 200 kilometers (very low attenuation) | Yes                                                           |
| **Terrestrial Radio Channel** | Very high cost               | Up to 14 Gbps          | Up to tens of kilometers                    | No (path loss, shadow fading, multipath fading, interference) |
| **Satellite Radio Channels**  | Very huge cost               | Up to hundreds of Mbps | About 36,000 kilometers                     | No (path loss, shadow fading, multipath fading, interference) |

# 3. Network Core

The network core is a mesh of interconnected routers and communication links.
## Internet Hierarchy
1. **Content Provider Networks:** Private networks (e.g., Google, Microsoft, Akamai) that bring services and content close to end users, often bypassing Tier-1 and regional ISPs.
2. **Tier-1 Commercial ISPs:** High-capacity global backbones (e.g., Sprint, AT&T, NTT) located at the center of the internet structure with national and international coverage.
3. **IXPs (Internet Exchange Points):** Meeting points where multiple ISPs connect together to exchange traffic directly.
4. **Regional ISPs:** Networks that arise to connect local access networks to global Tier-1 ISPs.
5. **Access ISPs:** Connect end systems directly to the Internet.


# 4. Delay, Loss, and Throughput

## The 4 Sources of Packet Delay (Nodal Delay)
Total Nodal Delay formula:
$$
d_{nodal} = d_{proc} + d_{queue} + d_{trans} + d_{prop}
$$

1.  **Processing Delay ($d_{proc}$):** Time to check bit errors and determine output link (typically < msec).
2.  **Queueing Delay ($d_{queue}$):** Time waiting at output link for transmission. Depends heavily on network congestion.
    *   **Traffic Intensity** = $La / R$ (where $a$ = avg packet arrival rate).
    *   If $La / R$ approaches 1, queuing delay becomes large. If $> 1$, packets are lost.
    * *it is hard to get an exact number for the queuing delay* as it depends on the cognition *(ازدحام)* of the network , so it's often not put into consideration when calculating the total delay
3.  **Transmission Delay ($d_{trans}$):** Time to push the packet onto the link.
    *   *Formula:* $d_{trans} = L / R$
    *   $L$ = packet length (bits)
    *   $R$ = link bandwidth/transmission rate (bps)
4.  **Propagation Delay ($d_{prop}$):** Time for a bit to travel through the physical medium.
    *   *Formula:* $d_{prop} = d / s$
    *   $d$ = length of physical link (distance)
    *   $s$ = propagation speed ($\sim 2 \times 10^8 m/sec$)

### Traffic Intensity .

($\frac{L \cdot a}{R}$) Let $a$ be the average packet arrival rate (packets/sec)

- $\frac{L \cdot a}{R} \approx 0 \rightarrow$ Small queueing delay.
- $\frac{L \cdot a}{R} \rightarrow 1 \rightarrow$ Queueing delay grows exponentially.
- $\frac{L \cdot a}{R} > 1 \rightarrow$ Arrival rate exceeds link capacity; queue grows infinitely and packets drop (Packet Loss).


## Throughput
*   Rate ($bits/sec$) at which bits are transferred between sender and receiver.
*   **Bottleneck link:** The link on the end-to-end path that constrains the overall throughput (usually the link with the lowest bandwidth).
$$
\text{Throughput} = \min\left(R_s,\, R_c,\, \frac{R}{N}\right)
$$
# 5. Key Network Architecture Pillars

- **Fault Tolerance:** System continues functioning despite component failures, a key factor is redundancy.
- **Scalability:**  the ability of a system/network to be modified without affecting current users and without undergoing fundamental change at its core.
- **Quality of Service (QoS):** Mechanisms that prioritize traffic types to guarantee minimum performance requirements.
- **Security**
 
 
# 6. protocol layers, service models
## Protocol Layers & Encapsulation
### OSI Reference Model
- **7. Application Layer:** Supports network applications (e.g., HTTP, SMTP, DNS). Data unit: Message.
- **6. Presentation Layer:** Allows applications to interpret the meaning of data (e.g., encryption, compression, machine-specific conventions).
- **5. Session Layer:** Manages synchronization, checkpointing, and recovery of data exchange.
- **4. Transport Layer:** Process-to-process data transfer (e.g., TCP, UDP). Data unit: Segment.
- **3. Network Layer:** Routing of datagrams from source to destination (e.g., IP, routing protocols). Data unit: Datagram.
- **2. Link Layer:** Data transfer between neighboring network elements (e.g., Ethernet, WiFi). Data unit: Frame.
- **1. Physical Layer:** Transmits raw bits "on the wire".

### The Internet Protocol Stack (TCP/IP)
it has the same layers of the OSI except the **presentation** and **session** layer.
if the developer needs them they have to develop them in the **application** layer.
