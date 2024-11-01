#!/bin/bash

echo "Run script"

# run backend
npm run start &

# run frontend
cd bloglist-frontend
npm run preview