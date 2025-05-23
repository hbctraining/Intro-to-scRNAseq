#### Clustering
# After loading `seurat_integrated.RData`, check the object clusters with different resolution (0.4, 0.6, 0.8, 1.0, 1.4). For each resolution plot the corresponding UMAP and report how many clusters you observe. Which resolution do you think makes sense?


#### Clustering quality control
# Cell Type	Clusters
# CD14+ monocytes	1, 3
# FCGR3A+ monocytes	10
# Conventional dendritic cells	14
# Plasmacytoid dendritic cells	16
# Macrophages	-
# B cells	?
# T cells	?
# CD4+ T cells	?
# CD8+ T cells	?
# NK cells	?
# Megakaryocytes	?
# Erythrocytes ?
# Unknown	?

#### Marker identification
# In the previous lesson, we identified cluster 10 as FCGR3A+ monocytes by inspecting the expression of known cell markers FCGR3A and MS4A7. Use FindConservedMarkers() function to find conserved markers for cluster 10. What do you observe? Do you see FCGR3A and MS4A7 as highly expressed genes in cluster 10?
