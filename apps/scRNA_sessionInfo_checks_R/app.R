library(shiny)
library(shinythemes)
library(shinyjs)

# Define User Interface

User_Interface <- fluidPage(theme = shinytheme("cerulean"),
                    useShinyjs(),
                    navbarPage("HBC Training",
                      tabPanel("scRNA-seq",
                        tags$h1("Single-cell RNA-seq analysis R Package Check"),
                        sidebarPanel( 
                          width = 6,
                          div(
                          id = "side-panel",
                          h3("Paste your sessionInfo() below"),                        
                          textAreaInput("session_info", "", height = 250)),
                          actionButton("run", "Check my sessionInfo()"), 
                          actionButton("reset", "Clear Input")
                        ),
                        mainPanel(
                          width = 6,
                          h3("Missing Packages"),
                          textOutput("txtout"),
                          )
                        )
                      )
                    )

Server <- function(input, output){
  session_info_check <- eventReactive(
    eventExpr = input$run, 
    valueExpr = {input$session_info}
  )
  observeEvent(input$reset, {
    reset("side-panel")})
  failed_packages <- c()
  output$txtout <- renderText({
    biocmanager_logical <- any(grepl("BiocManager", session_info_check()))
    annotationhub_logical <- any(grepl("AnnotationHub", session_info_check()))
    ensembldb_logical <- any(grepl("ensembldb", session_info_check()))
    multtest_logical <- any(grepl("multtest", session_info_check()))
    glmGamPoi_logical <- any(grepl("glmGamPoi", session_info_check()))
    tidyverse_logical <- any(grepl("tidyverse", session_info_check()))
    matrix_logical <- any(grepl("Matrix", session_info_check()))
    rcurl_logical <- any(grepl("RCurl", session_info_check()))
    scales_logical <- any(grepl("scales", session_info_check()))
    cowplot_logical <- any(grepl("cowplot", session_info_check()))
    seurat_logical <- any(grepl("Seurat", session_info_check()))
    metap_logical <- any(grepl("metap", session_info_check()))
    reshape2_logical <- any(grepl("reshape2", session_info_check()))
    plyr_logical <- any(grepl("plyr", session_info_check()))
    devtools_logical <- any(grepl("devtools", session_info_check()))
    presto_logical <- any(grepl("presto", session_info_check()))
    if ( all(biocmanager_logical, annotationhub_logical, ensembldb_logical, multtest_logical, glmGamPoi_logical, tidyverse_logical, matrix_logical, rcurl_logical, scales_logical, cowplot_logical, seurat_logical, metap_logical, reshape2_logical, plyr_logical, devtools_logical, presto_logical)){
      print("You are not missing any packages and you are ready for the course! Please take a screenshot or picture of this message and e-mail it to hbctraining@hsph.harvard.edu.")
    } 
    else {
      if ( biocmanager_logical == FALSE){
        failed_packages <- c(failed_packages, "BiocManager")
      }
      if ( annotationhub_logical == FALSE){
        failed_packages <- c(failed_packages, "AnnotationHub")
      }
      if ( ensembldb_logical == FALSE){
        failed_packages <- c(failed_packages, "ensembldb")
      }
      if ( multtest_logical == FALSE){
        failed_packages <- c(failed_packages, "multtest")
      }
      if ( glmGamPoi_logical == FALSE){
        failed_packages <- c(failed_packages, "glmGamPoi")
      }
      if ( tidyverse_logical == FALSE){
        failed_packages <- c(failed_packages, "tidyverse")
      }
      if ( matrix_logical == FALSE){
        failed_packages <- c(failed_packages, "Matrix")
      }
      if ( rcurl_logical == FALSE){
        failed_packages <- c(failed_packages, "RCurl")
      }
      if ( scales_logical == FALSE){
        failed_packages <- c(failed_packages, "scales")
      }
      if ( cowplot_logical == FALSE){
        failed_packages <- c(failed_packages, "cowplot")
      }
      if ( seurat_logical == FALSE){
        failed_packages <- c(failed_packages, "Seurat")
      }
      if ( metap_logical == FALSE){
        failed_packages <- c(failed_packages, "metap")
      }
      if ( reshape2_logical == FALSE){
        failed_packages <- c(failed_packages, "reshape2")
      }
      if ( plyr_logical == FALSE){
        failed_packages <- c(failed_packages, "plyr")
      }
      if ( devtools_logical == FALSE){
        failed_packages <- c(failed_packages, "devtools")
      }
      if ( presto_logical == FALSE){
        failed_packages <- c(failed_packages, "presto")
      }
      failed_packages
    }
  })
}


shinyApp(ui = User_Interface, server = Server)
