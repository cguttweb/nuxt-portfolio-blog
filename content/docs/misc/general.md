# Miscellaneous

## General web notes

### Hosting

Web hosting is a service allowing organisations and individuals to post a website/app on the internet. A web host/hosting service is a business providing technology and services needed to view a website on the internet. Any apps/websites hosted on servers.

### HTTP (Hyper Text Transfer Protocol)

This is an application layer protocol for transmitting hypermedia documents e.g.HTML. It was designed for communication between web browsers and servers. It is a stateless protocol meaning that the server does not keep any data between the two requests. (look up status code/http headers and how they work)

### Content Security Policy (CSP)

CSP is used to detect and mitigate some types of website attacks such as XSS and data injections. The implementation is based on an HTTP header known as CSP. You can use a meta tag to configure a policy e.g.

```html
<http-equiv ="Content Security Policy" content="default-src 'self'"></http-equiv>
```

### CORS (Cross Origin Resource Sharing)

This is a mechanism that uses additional HTTP headers telling browsers to give a web application running at one origin access to selected resources from a different origin.
A web application executes a cross origin HTTP request when it requests a resource that has a different origin (which could be a domain, protocol or port). These CORS requests are blocked by browsers intialised from scripts for security reasons.
For example both XMLHttpRequest and the Fetch API follow the same-origin policy. This standard can enable cross-site HTTP requests for:

- XMLHttpRequests and Fetch APIs
- web fonts
- css shapes from images
- webGL textures (look this up)
- image/video frames drawn to a canvas using drawImage()

### OWASP (Open Web Application Security Project)

This is a non-profit organisation and worldwide network that works for security in free software especially on the web. (owasp.org) needs additional research
