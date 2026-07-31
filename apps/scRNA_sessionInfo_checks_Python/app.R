library(shiny)
library(shinythemes)
library(shinyjs)

# Define User Interface

User_Interface <- fluidPage(theme = shinytheme("cerulean"),
                              titlePanel("Single-cell RNA-seq analysis Python Package Check"),
                              
                              fluidRow(
                                # Sidebar
                                column(
                                  width = 4,
                                  class = "col-xs-4",  # keep 4/12 width even on extra-small screens
                                  h3("Paste your session_Info below"),
                                  textAreaInput("session_info", NULL, width = "100%", height = "300px"),
                                  actionButton("check", "Check my session_Info"),
                                  actionButton("clear", "Clear Input")
                                ),
                                
                                # Main panel (Missing Packages)
                                column(
                                  width = 8,
                                  class = "col-xs-8",
                                  h3("Missing Packages"),
                                  tableOutput("missing_pkgs")
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
    matplotlib_logical <- any(grepl("matplotlib", session_info_check()))
    numpy_logical <- any(grepl("numpy", session_info_check()))
    pandas_logical <- any(grepl("pandas", session_info_check()))
    seaborn_logical <- any(grepl("seaborn", session_info_check()))
    sklearn_logical <- any(grepl("scikit-learn", session_info_check()))
    scanpy_logical <- any(grepl("scanpy", session_info_check()))
    if ( all(matplotlib_logical, numpy_logical, pandas_logical, seaborn_logical, sklearn_logical, scanpy_logical)){
      print("You are not missing any packages and you are ready for the workshop! Please take a screenshot or picture of this message and e-mail it to hbctraining@hsph.harvard.edu.")
    } 
    else {
      if ( matplotlib_logical == FALSE){
        failed_packages <- c(failed_packages, "matplotlib")
      }
      if ( numpy_logical == FALSE){
        failed_packages <- c(failed_packages, "numpy")
      }
      if ( pandas_logical == FALSE){
        failed_packages <- c(failed_packages, "pandas")
      }
      if ( seaborn_logical == FALSE){
        failed_packages <- c(failed_packages, "seaborn")
      }
      if ( sklearn_logical == FALSE){
        failed_packages <- c(failed_packages, "scikit-learn")
      }
      if ( scanpy_logical == FALSE){
        failed_packages <- c(failed_packages, "scanpy")
      }
      failed_packages
    }
  })
}


shinyApp(ui = User_Interface, server = Server)
