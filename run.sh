#!/bin/bash

# Install Node.js dependencies
npm install

# Install Python dependencies
pip install -r requirements.txt

# Run the backend server
python -m flask run &

# Run the frontend server
npm start &

# Wait for all background processes to finish
wait
