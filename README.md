# Deriv Proxy

This is a proxy that can be run via docker for use in testing websites.

## Prerequisites

- Docker (to run the container)
- Sudo (to change your hosts file)

## 1) Run Proxy

Run the proxy on your local machine
```
docker pull ghcr.io/deriv-experiments/deriv-proxy:latest`
docker run --rm -it --name deriv-proxy -p 443:443 ghcr.io/deriv-experiments/deriv-proxy:latest https://webflow.deriv.com
```

## 2) Change hosts

Update your hosts file to point the domain to your local host
Run `vim /etc/hosts` or `nano /etc/hosts`

Add the line:

```
127.0.0.1 deriv.com
```

## 3) Visit the page

In your browser, visit https://deriv.com as normal. It should point to your local proxy transparently.

## 4) Accept self signed certificate

As we are proxying the requests, the certificate is not valid. You will need to bypass this by accepting the danger screens.

## 5) Cleanup

When you are finished you can hit `ctrl+c` on your terminal and the docker image will be cleaned up.

Alternatively, you can run the below in another tab:

```
docker rm -f deriv-proxy
```
