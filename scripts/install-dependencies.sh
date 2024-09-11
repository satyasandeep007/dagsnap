#!/bin/bash

# Install dependencies in the Snap folder
echo "Installing dependencies in the Snap folder..."
yarn --cwd snap install

# Install dependencies in the Proxy Server folder
echo "Installing dependencies in the Proxy Server folder..."
yarn --cwd proxy-server install

# Install dependencies in the main project (Next.js frontend)
echo "Installing dependencies in the main project..."
yarn install

echo "All dependencies installed successfully!"