#!/bin/bash

echo "Build script"

# install backend dependencies
npm install

# install frontend dependencies
cd bloglist-frontend
npm install

# build application
npm run build