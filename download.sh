#!/bin/bash

# Set the URL and destination file name
URL="https://www.dropbox.com/scl/fo/eijp37x4wp3bdplj31d4r/ABtEXRUMxeK39bC1tGzy2IM?rlkey=kv6sqa0vgvgddr7j4b4f9kmm7&st=o432wvs9&dl=0"
ZIPFILE="single_cell_rnaseq.zip"

# Download the file
curl -L "$URL" -o "$ZIPFILE"

# Unzip the file
unzip "$ZIPFILE"

# Move data folder
mv data/ lessons/
mv intermediate/ lessons/

# Remove the zip file after extraction
rm "$ZIPFILE"