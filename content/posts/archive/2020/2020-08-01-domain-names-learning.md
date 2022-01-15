---
layout: posts
title: "Learning about domain names"
date: 2020-08-01
---

- DNS = Domain Name System
- IP = Internet Protocol
- URL = Uniform Resource Locater

DNS is a decentralised naming system for the internet like an address book. You enter an address into the search bar and it does a DNS lookup meaning it will find the IP address of the address you entered. A reverse lookup is the opposite of this figuring out the domain name associated with a given IP address.

### Domain name structure

Domain names are read right to left by the browser and are made of several parts e.g. example given by MDN web docs

```html
developer.mozilla.org
```

The first part in this case `org` is known as the TLD (Top Level Domain) which tells the user the purpose behind the domain name. Some are generic like `.com, .net` and do not need to meet any particular criteria others are stricter e.g.

- `.gov` - this is only allowed for government departments
- `.edu` - for educational and academic institutions
- `local TLDs e.g. .de, .fr` - these require the serviec to be hosted in a certain country or in a given language.

When you 'own' a domain name you pay for the right to use it for 1+ years. They are bought through companies known as registrars e.g. 123-reg/godaddy among many others out there use registrates to keep track of the information connecting to your domain name.

### ICANN (Internet Corporation for Assigned Names and Numbers)

This requires that when you register a domain name you provide accurate information which is published in whois data for legal and admin purposes, putting your personal information out there which is where whois privacy comes in. 

Domain privacy aka Whois privacy is offered by several domain name registrars in which users buy privacy from the company who will replace the user information in WHOIS with the information of a forwarding address. Some personal information is collected by the registrats e.g. name, email, address to provide the service to you. It is also well noting that some TLDs have privacy caveats.

#### DNS Requests - how do they work?

1. Type an address in your search bar.
2. The browsers then asks your PC if it recognises the IP address identified by this domain name (using local DNS cache). If it does recognise it the browser will load the page after successfully talking to the server. **Request finished.**
3. If it is not known it will ask the DNS server whose job it is to tell your PC which IP matches each registered domain name.
4. Now your PC knows the IP address the browser negotiates the contents with the server.
