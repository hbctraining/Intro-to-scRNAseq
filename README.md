# Single-cell RNA-seq data analysis workshop 

QC             |  Clustering | Annotation
:-------------------------:|:-------------------------:|:-------------------------:
![](img/nUMIs.png)  |  ![](img/SC_umap_SCTv2.png) | ![](img/dotplot_cluster_markers.png)


### Description

This **Introduction to single-cell RNA-seq analysis** workshop will instruct participants on how to design and analyze a single-cell RNA-seq experiment from start to end.  

This will be a hands-on workshop geared towards biologists in which we will focus on using the Seurat package using R/RStudio. Working knowledge of R is required or completion of the [Introduction to R workshop](https://hbctraining.github.io/Intro-to-R/). The lessons are spread over 3 sessions, totaling around 7.5 hours of trainer-led time.


### Learning Objectives

- Explain common considerations when designing a single-cell RNA-seq experiment
- Discuss the steps involved in taking raw single-cell RNA-sequencing data and generating a count (gene expression) matrix
- Compute and assess QC metrics at every step in the workflow
- Cluster cells based on expression data and derive the identity of the different cell types present
- Perform integration of different sample conditions
- Annotate cells with marker genes

**Be sure to follow the Installation steps before starting the lesson**

### Installation Requirements
<details>

<summary>Click here for instructions</summary>
#### Applications
Download the most recent versions of R and RStudio for your laptop:

 - [R](http://lib.stat.cmu.edu/R/CRAN/) **(version 4.0.0 or above)**
 - [RStudio](https://www.rstudio.com/products/rstudio/download/#download)

#### Packages for R

> **Note 1: Install the packages in the order listed below.**

> **Note 2:  All the package names listed below are case sensitive!**
 
> **Note 3**: At any point (especially if you’ve used R/Bioconductor in the past), in the console **R may ask you if you want to update any old packages by asking Update all/some/none? [a/s/n]:**. If you see this, **type "a" at the prompt and hit Enter** to update any old packages. _Updating packages can sometimes take quite a bit of time to run, so please account for that before you start with these installations._  

> **Note 4:** If you see a message in your console along the lines of “binary version available but the source version is later”, followed by a question, **“Do you want to install from sources the package which needs compilation? y/n”, type n for no, and hit enter**.


**(1)** Install the 4 packages listed below from **Bioconductor** using the the `BiocManager::install()` function.

1. `AnnotationHub`
1. `ensembldb`
1. `multtest`
1. `glmGamPoi`

**Please install them one-by-one as follows:**

```r
BiocManager::install("AnnotationHub")
BiocManager::install("ensembldb")
& so on ...
```

**(2)** Install the 8 packages listed below from **CRAN** using the `install.packages()` function. 

1. `tidyverse`
1. `Matrix`
1. `RCurl`
1. `scales`
1. `cowplot`
1. `BiocManager`
1. `Seurat`
1. `metap`

**Please install them one-by-one as follows:**

```r
install.packages("tidyverse")
install.packages("Matrix")
install.packages("RCurl")
& so on ...
```

**(3)** Finally, please check that all the packages were installed successfully by **loading them one at a time** using the `library()` function.  

```r
library(Seurat)
library(tidyverse)
library(Matrix)
library(RCurl)
library(scales)
library(cowplot)
library(metap)
library(AnnotationHub)
library(ensembldb)
library(multtest)
library(glmGamPoi)
```

**(4)** Once all packages have been loaded, run sessionInfo().  

```r
sessionInfo()
```

---

</details>

Trainer-led learning | Self-learning
:-------------------------:|:-------------------------:
[![AltText](https://img.shields.io/badge/Title-37a779?style=for-the-badge)](schedule/README.md) | [![AltText](https://img.shields.io/badge/Title-37a779?style=for-the-badge)](schedule/links-to-lessons.md)

### Citation

To cite material from this course in your publications, please use:

> Mary Piper, Meeta Mistry, Jihe Liu, William Gammerdinger, & Radhika Khetani. (2022, January 6). hbctraining/scRNA-seq_online: scRNA-seq Lessons from HCBC (first release). Zenodo. https://doi.org/10.5281/zenodo.5826256

A lot of time and effort went into the preparation of these materials. Citations help us understand the needs of the community, gain recognition for our work, and attract further funding to support our teaching activities. Thank you for citing this material if it helped you in your data analysis.

---

*These materials have been developed by members of the teaching team at the [Harvard Chan Bioinformatics Core (HBC)](http://bioinformatics.sph.harvard.edu/). These are open access materials distributed under the terms of the [Creative Commons Attribution license](https://creativecommons.org/licenses/by/4.0/) (CC BY 4.0), which permits unrestricted use, distribution, and reproduction in any medium, provided the original author and source are credited.*
