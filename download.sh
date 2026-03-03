#!/bin/bash

# Set the URL and destination file name
URL="https://www.dropbox.com/s/vop78wq76h02a2f/single_cell_rnaseq.zip?dl=1"
ZIPFILE="single_cell_rnaseq.zip"

# Download the file
curl -L "$URL" -o "$ZIPFILE"

# Unzip the file
unzip "$ZIPFILE"

# Move data folder
mv single_cell_rnaseq/data lessons/

# Remove the zip file after extraction
rm "$ZIPFILE"
rm -rf __MACOSX
rm -rf single_cell_rnaseq

# merged_seurat object
curl -L "https://www.dropbox.com/scl/fi/pj13sjx0fkaxgflf3wy7n/merged_seurat.RDS?rlkey=0sk9cv33j2mq9e6uxbf0ixgi9&st=w6px5kj1&dl=1" -o "lessons/data/merged_seurat.RDS"

# merged_filtered_seurat.RData object
curl -L "https://www.dropbox.com/scl/fi/gzgugzm9kenxnz4fii397/merged_filtered_seurat.RData?rlkey=jkra4ua93593hpv1k71su9z95&st=ctgbe5u3&dl=1" -o "lessons/data/merged_filtered_seurat.RData"

# seurat_filtered.RData object
curl -L "https://www.dropbox.com/scl/fi/0q5qrdo3cvpxxr5g0tqtv/seurat_filtered.RData?rlkey=n7v8wdhhr0b2ts78va71lb33q&st=qszf09ur&dl=1" -o "lessons/data/seurat_filtered.RData"

# split_seurat.rds object
curl -L "https://www.dropbox.com/scl/fi/7ion5yarjsko7rwfojzom/split_seurat.rds?rlkey=9x2b5t82y7hf805szneb6rnt2&st=hsdurfn4&dl=1" -o "lessons/data/split_seurat.rds"

# seurat_phase.rds object
curl -L "https://www.dropbox.com/scl/fi/t7vf6s94ftu8rf24rr66h/seurat_phase.rds?rlkey=b34o7c285h1icxsrqbmggg4b6&st=j3k3ig2x&dl=1" -o "lessons/data/seurat_phase.rds"