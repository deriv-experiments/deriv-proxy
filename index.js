const https = require('https');
const httpProxy = require('http-proxy');
const fs = require('fs');

const target = process.argv[2];

const proxy = httpProxy.createProxyServer({
  target,
  changeOrigin: true,
  secure: false
});

proxy.on('error', (err, req, res) => {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Proxy error: ' + err.message);
});

const sslOptions = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem')
};

const server = https.createServer(sslOptions, (req, res) => {
  proxy.web(req, res);
});

server.listen(443);

console.log('Forwarding 0.0.0.0 to ' + target + ' on port 443');
