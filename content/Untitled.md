# 2.1 Principles of Network Applications

## How Apps Work

- **Apps run on end systems** (like your PC or phone), not on network core routers.
- **Processes:** A process is a program running inside a host.
    - Same host: Use Inter-Process Communication (IPC).
    - Different hosts: Exchange messages over the network.
- **Client vs. Server:**
    
    - **Client process:** Starts the connection.
        
    - **Server process:** Waits for someone to contact it.
        

## Architectures

- **Client-Server:** Server is always on with a fixed IP. Clients connect to it. (Example: Web, Email).
    
- **Peer-to-Peer (P2P):** No always-on server. End systems talk directly to each other. Peers share files and service. (Example: BitTorrent).
    

## Sockets

- **Socket:** The door between the app application process and the transport layer (OS).
    
- App developer writes the app code; the OS handles everything below the socket.
    

## Addressing Processes

- An IP address alone is not enough because one PC runs many apps.
    
- **Socket = IP Address + Port Number** (Example: `128.119.245.12:80`).
    
- Well-known ports: HTTP = 80, Mail = 25.
    

## Transport Services Needed

- **Reliable Data Transfer:** Some apps need 0% data loss (file transfer, web). Others can lose data (audio).
    
- **Throughput:** Some need a minimum speed (multimedia); others use whatever they get ("elastic apps").
    
- **Timing:** Real-time apps (games, voice calls) need very low delay.
    
- **Security:** Encryption and passwords.
    

## Transport Protocols (TCP vs. UDP)

- **TCP:** Connection-oriented, reliable, does flow/congestion control, but no timing or speed guarantee.
    
- **UDP:** Connectionless, unreliable (best effort), fast, no guarantees. Used for gaming and streaming.
    
- **TLS (Transport Layer Security):** Adds encryption, integrity, and authentication on top of TCP.
    

# 2.2 Web and HTTP

## Basics

- **Web page:** Made of a base HTML file + other objects (images, audio, etc.).
    
- **URL:** Address of an object. Has a **host name** and a **path name**.
    
- **HTTP (HyperText Transfer Protocol):** Web's core protocol. Runs over TCP on port 80.
    
- **Stateless:** The server remembers nothing about past requests.
    

## HTTP Connections

- **Non-Persistent HTTP:** One object per TCP connection, then the connection closes. Takes 2 RTTs per object. Slow.
    
- **Persistent HTTP (HTTP/1.1):** Multiple objects sent over the same open TCP connection. Fast (takes as little as 1 RTT).
    

## HTTP Messages

- **Request Message:** Method (GET, POST), URL, version, and headers.
    
    - `GET`: Request a file or send data in the URL.
        
    - `POST`: Send user input inside the message body.
        
- **Response Message:** Status line (version, status code, phrase), headers, and data.
    
    - _Codes:_ `200 OK`, `301 Moved Permanently`, `400 Bad Request`, `404 Not Found`.
        

## Cookies

- HTTP is stateless, so sites use **cookies** to remember users (shopping carts, login state).
    
- **4 Parts:** 1) Set-cookie header in response, 2) Cookie header in next request, 3) Cookie file stored in browser, 4) Database on server.
    

## Web Caching (Proxy Servers)

- **Goal:** Get the web page from a local cache instead of going all the way to the origin server.
    
- **Why?** Faster response time, less traffic on access links, saves money.
    
- **Conditional GET:** Cache asks the server if the file changed using `If-modified-since: <date>`. If not changed, server replies `304 Not Modified` with no data.
    

# 2.3 E-mail

## Main Parts

- **User Agents (MUA):** Email apps (Outlook, Thunderbird).
    
- **Mail Servers:** Store and forward mail.
    
- **SMTP (Simple Mail Transfer Protocol):** Used to push mail between servers (port 25). Uses persistent connections and is stateful.
    
- **Mail Access Protocols:** Used to retrieve mail from the server to your app.
    
    - **IMAP:** Stores mail on the server, lets you organize folders and sync across devices.
        
    - **POP3:** Downloads and usually deletes mail from the server.
        

# 2.4 DNS (Domain Name System)

## Why DNS?

- Humans use easy names (`www.yahoo.com`), but routers use IP addresses. DNS translates names to IPs.
    
- It is a distributed database running over UDP (Port 53).
    

## Structure

- **Root DNS Servers:** Top of the tree. Points to TLD servers.
    
- **TLD (Top-Level Domain) Servers:** Handles `.com`, `.org`, `.edu`, `.net`, and country codes (`.uk`, `.eg`).
    
- **Authoritative DNS Servers:** Organization's own servers that hold the real IP for their hosts.
    
- **Local DNS Server:** Your ISP's or university's default name server. Acts as your proxy.
    

## Query Types

- **Iterative Query:** Server says: "I don't know, but ask this next server."
    
- **Recursive Query:** Server takes the job and does all the work for you (puts heavy load on upper servers).
    

## Caching

- Name servers save (cache) mappings for a short time (TTL) so they don't have to ask the root every time.
    

## DNS Records

Format: `(name, value, type, ttl)`

- **Type A:** Name = hostname, Value = IP address.
    
- **Type NS:** Name = domain, Value = Authoritative DNS server.
    
- **Type CNAME:** Name = alias, Value = real canonical name.
    
- **Type MX:** Value = mail server name.
    

# 4.3.2 DHCP (Dynamic Host Configuration Protocol)

- **Goal:** Automatically give an IP address to a host joining the network ("plug and play").
    
- **DORA 4-Step Process:**
    
    1. **Discover:** Client broadcasts: "Is there a DHCP server?"
        
    2. **Offer:** Server broadcasts: "Yes, here is an IP you can use."
        
    3. **Request:** Client broadcasts: "OK, I will take that IP."
        
    4. **ACK:** Server broadcasts: "Confirmed! The IP is yours."
        
- DHCP also gives the client: default gateway router, DNS server address, subnet mask, and lease time.
    

# 2.5 P2P Applications

## BitTorrent

- Files are split into small chunks (256 KB).
    
- **Tracker:** A server that tracks which peers are in the "swarm" (torrent).
    
- **How it works:** You join, get a list of peers from the tracker, and download missing chunks from neighbors (rarest chunks first). While downloading, you upload to others.
    
- **Tit-for-Tat:** You upload chunks to the 4 peers who are currently uploading to you at the highest rate. Every 30 seconds, you randomly pick a new peer ("optimistically unchoke") to find better connections.