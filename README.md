# Steps for QA
1) Run local proxy
  - docker run -n deriv-proxy -p 443:443 ghcr.io/deriv-experiments/deriv-proxy https://webflow.deriv.com

2) Change hosts
  - vim /etc/hosts
  - 127.0.0.1 deriv.com

3) Visit https://deriv.com

4) Accept self signed certificate

5) Regression test as normal

6) Run docker rm deriv-proxy
