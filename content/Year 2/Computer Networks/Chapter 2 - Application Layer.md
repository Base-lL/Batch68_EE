
# 1. Principles of network applications
## Creating a network app
programmer write programs that:
- run on (different) end systems
- communicate over network

they don't write software for the network-core devices *(i.e packets, switches)*, they target end systems like phones, PC and servers

## network application architecture
### Client-server
#### Server
- always-on host
- permanent IP address
- responds to requests but doesn't start them
#### clients:
- may be intermittently connected
- may have dynamic IP addresses
- initiates communication with server
- do not communicate directly with each other *(server acts as middle-man)*
#### examples
- examples: web(HTTP)
- email(IMAP)
- file transfer(FTP)
### Peer-to-peer
- no always-on server
- arbitrary end systems directly communicate *(users connect, no middle-man)*
- peers request service from other peers, provide service in return to other peers
- peers are intermittently connected and change IP addresses
**example**: P2P file sharing (BitTorrent)

> [!note]
> due to the nature of **peer-to-peer** relaying on users to share files, a main server hosts the file in order to get the first set of peers and start the chain

## Processes communicating
**process**: a program running within a host (or machine, or end system, or device, you get it)

within the *same host*, two processes communicate using inter-process communication *(OS side)* 
processes in different hosts communicate by exchanging **messages**
process *sends*/*receives* **messages** *to*/*from* its **socket**, which can be like a door:
- sending process shoves message out door
- sending process relies on transport infrastructure on other side of door to deliver message to socket at receiving process
- two sockets involved: one on each side

## Addressing processes 
on the OS, each process has it's own identifier called process ID *(PID)*
on the network, each process has to have an identifier too

host device has a unique **IP address** that could be used as an identifier
but this results in a problem

many process can run on the host but we only have a way to identify the host and not the process, to solve this, we include **ports**

the network identifier for the process: **sockets**
formatted like:
- IP:port
- 127.0.0.1:7777
*ip address and ports will be discussed more in later chapters*

## app transport service

### reliable data transfer
how much packets were received successfully

- some apps *(e.g., file transfer, web transactions)* require 100% reliable data transfer
- other apps *(e.g., interactive games, video/audio streaming)* can tolerate some loss
### timing
the delay between sending and receiving the data

some apps *(e.g., Internet telephony, interactive games)* require low delay to be “effective”

### throughput
the delay between each received data, can result in long waiting times for loading *(lag)*

- some apps *(e.g., multimedia)* require minimum amount of throughput to be “effective”
- other apps *(“elastic apps”)* make use of whatever throughput they get
 
### security
encryption, authentication
*"this is not a security course"*

| **application**       | **data loss** | **throughput**                        | **time sensitive** |
| --------------------- | ------------- | ------------------------------------- | ------------------ |
| file transfer         | no loss       | elastic                               | no                 |
| e-mail                | no loss       | elastic                               | no                 |
| Web documents         | no loss       | elastic                               | no                 |
| real-time audio/video | loss-tolerant | audio: 5kbps-1Mbps video:10kbps-5Mbps | yes, 100's msec    |
| stored audio/video    | loss-tolerant | audio: 5kbps-1Mbps video:10kbps-5Mbps | yes, few secs      |
| interactive games     | loss-tolerant | few kbps up                           | yes, 100's msec    |
| text messaging        | no loss       | elastic                               | yes and no         |

## Internet transport protocols services

### TCP:
*T*ransmission *C*ontrol *P*rotocol
- **reliable transport** between sending and receiving process
- **connection-oriented**: setup required between client and server processes

**TCP** ensures data arrives in the correct order and resends any lost packets

### UDP:
*U*ser *D*atagram *P*rotocol
- **unreliable data transfer** between sending and receiving process
- **connectionless protocol**: sends data without establishing a connection

**UDP** sends data quickly without checking for delivery or order


> [!question] Why UDP?
> fast in both setting up *(since it's connectionless)* and sending data, prefered in applications where packet loses aren't a big problem

## Securing TCP
- **TCP** & **UDP**
	* no encryption
	* passwords sent into socket traverse Internet in clear text
- *T*ransport *L*ayer *S*ecurity \[RFC 5246\] *(Previously SSL)*
	* provides encrypted TCP connection
	* data integrity
	* end-point authentication
- **TLS** is at application layer
	* applications use TLS libraries, that “talk” to TCP
# 2. Web and HTTP

a web page is a document that consists of objects:
- the base **HTML**-file
- images, videos, audio files
- *scripts*: java applet, CSS, javascript

the HTML file includes several referenced objects, each is  addressable by a URL, e.g. :
$$
\underbrace{\text{www.someschool.edu\\ }}_\text{host name}
/
\underbrace{\text{someDept/pic.gif\\ }}_\text{path name}
$$


## cookies

cookies consist of 4 components:

- cookie header line of HTTP response message
- cookie header line in next HTTP request message
- cookie file kept on user’s host, managed by user’s browser
- back-end database at Web site

# 3. Email Protocols (SMTP, POP3, IMAP)

> [!error]
> Email protocol was declared removed.

# 4. DNS





# 5. DHCP

Q: How does a host get IP address?
- Hard-coded by system admin
- *D*ynamic *H*ost *C*onfiguration *P*rotocol

## DHCP overview

- host broadcasts *“DHCP discover”* msg \[optional]
- DHCP server responds with *“DHCP offer”* msg \[optional]
- host requests IP address: *“DHCP request”* msg
- DHCP server sends address: *“DHCP ack”* msg