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

# Web summary
curl -L "https://www.dropbox.com/scl/fi/skjyyvs9078pbef7s4qvb/ctrl_web_summary.html?rlkey=335gw4qmy29uny5813wg0zakr&dl=1" -o "lessons/data/ctrl_web_summary.html"
curl -L "https://www.dropbox.com/scl/fi/r6n83y57cd7vhc130zm1g/stim_web_summary.html?rlkey=50ur193yfsy5ex9urkmr87h3c&dl=1" -o "lessons/data/stim_web_summary.html"

# Metrics summary
curl -L "https://www.dropbox.com/scl/fi/qnz44ng51ojmhu44acc8g/ctrl_metrics_summary.csv?rlkey=8zx5g1mtn6mrlwpv0syoz3bv4&st=9d0okyhf&dl=1" -o "lessons/data/ctrl_metrics_summary.csv"
curl -L "https://www.dropbox.com/scl/fi/gaa4sabcbhwqpuogfh0us/stim_metrics_summary.csv?rlkey=h2uokc9r2edeinxtzgrpw3ds4&dl=1" -o "lessons/data/stim_metrics_summary.csv"

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