#!/bin/bash

# Create a directory for the certificates if it doesn't exist
mkdir -p ./certs

# Navigate to the certs directory
cd ./certs

# Generate a private key
openssl genrsa -out key.pem 2048

# Create a self-signed certificate
openssl req -new -x509 -key key.pem -out cert.pem -days 365 -subj "/C=US/ST=State/L=City/O=Organization/CN=staging.deriv.com"

echo "Certificates generated in ./certs directory."
