<?php
session_start();
//Add script to read MySQL data and export to excel
include_once("../exp/exportEmp.php");
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Christian Araña, and open source Contributors">
    <link rel="icon" href="../img_ico/ico/asti.ico"  type="image/x-icon">
    <title>TELFORD Svc. Phils. Inc.</title>

    <!-- EMAIL -->
    <script src="https://smtpjs.com/v3/smtp.js"></script>

    <!-- Bootstrap core CSS/JS -->
<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="../assets/dist/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<link href="../css/index.css" rel="stylesheet">


</head>
<body class="bg-light">
    
<div class="container card">
 <main>
   
                     <!-- line -->
   <div id="container-head">
    <img id="left" src="../img_ico/ico/asti_black.png" class="position-relative" alt="img_ico/ico/icos.png">
    <img id="right" src="../img_ico/ico/icos.png" class="position-relative" alt="img_ico/ico/asti_black.png">
      
        <p class="text-center">TELFORD Svc. Phils. Inc.
        <img id="center" src="../img_ico/ico/test.gif" class="img-responsive"></p>
     </div>
                
      <div class="container-fluid position-relative">

        <hr class="firstline">
      
      <form method="POST">

        <div class="row g-5 container-fluid position-relative">
            
            <div class="col-sm-6" >
                <button class="btn btn-outline-success rounded-pill btn-lg" id="export" name="export">EXPORT EMPLOYEE</button>
            </div>

            <div class="col-sm-6" >
                <button class="btn btn-outline-primary rounded-pill btn-lg" id="exportv" name="exportv">EXPORT VISITORS</button>
            </div>
        </div>
      </form>
    </div>
    </main>

  <footer class="pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2020-2021 TELFORD Svc. Phils. Inc.</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="../msg">Privacy</a></li>
      <li class="list-inline-item"><a href="../msg">Terms</a></li>
      <li class="list-inline-item"><a href="../msg">Support</a></li>
    </ul>
  </footer>
</div>
    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

  </body>
</html>
