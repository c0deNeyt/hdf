
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Christian Araña, and open source Contributors">
    <link rel="icon" href="img_ico/ico/asti.ico"  type="image/x-icon">
    <title>TELFORD Svc. Phils. Inc.</title>

<!------------------------------------------------------------------>
    <!-- EMAIL -->
<script src="https://smtpjs.com/v3/smtp.js"></script>
<!------------------------------------------------------------------>
    <!-- Bootstrap core CSS/JS -->
<link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">
<!------------------------------------------------------------------>
<script src="assets/dist/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<!------------------------------------------------------------------>
<link href="css/index.css" rel="stylesheet">
<!------------------------------------------------------------------>
    <!-- SEARCH JS/css -->
<script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>
<!------------------------------------------------------------------>
<script src="js/jquery-ui.min.js" type="text/javascript"></script>
<!------------------------------------------------------------------>   

</head>
<body class="bg-light">
    
<div class="container card">
 <main>
   
                     <!-- line -->
   <div id="container-head">
    <img id="left" src="img_ico/ico/asti_black.png" class="position-relative" alt="img_ico/ico/icos.png">
    <img id="right" src="img_ico/ico/icos.png" class="position-relative" alt="img_ico/ico/asti_black.png">
      
        <p class="text-center">TELFORD Svc. Phils. Inc.
        <img id="center" src="img_ico/ico/test.gif" class="img-responsive"></p>
     </div>
                
      <div class="container-fluid position-relative">

        <hr class="firstline">
      <h5 class="form-check-label">Please fill in the appropriate answer.</h5>
      <p class="form-check-label">(Mangyaring punan ang naaangkop na sagot)</p>
      <form class="needs-validation" novalidate >

        <div class="row g-3">
          <div class="col-sm-6">
            <label for="empid_1" class="form-label">Employee Number</label>
            <input type="number" class="form-control" id='empid_1' name="empid" required>
            <div class="invalid-feedback">
              Valid Employee # is required.
            </div>
          </div>

          <div class="col-sm-6" >
            <label for="btemp" class="form-label">Body Temperature</label>
            <input type="number" class="form-control" name="btemp" min="34" max="45" step="0.1" id="btemp" required>
            <div class="invalid-feedback">
              Valid body temperature is required.
            </div>

          </div>

          <div class="col-sm-6">
            <label for="firstname_1" class="form-label">First Name</label>
            <input  type="text" placeholder="this field is auto-fillable..." 
            class="form-control" id="firstname_1" name="fname" disabled="disabled">
          </div>

          <div class="col-sm-6 ">
            <label for="lastname_1" class="form-label">Last Name</label>
            <input type="text" placeholder="this field is auto-fillable..." 
            class="form-control" id="lastname_1" name="lname" disabled="disabled">
          </div>

          <fieldset  class="col-sm-6" >
              <label for="time" class="form-label">Time</label>
              <input type="text" class="form-control" id="time" name="tim">
          </fieldset>

          <fieldset class="col-sm-6">
              <label for="date" class="form-label">Date</label>
               <input class="form-control" type="text" id="date" name="date">
          </fieldset>
            </div>


         <hr class="my-4">

          <!-- <h5 class="mb-3">Please answer each question statement as honestly as possible.</h5> -->
          <label class="form-check-label" for="same-address">Are you currently experiencing any type of the following symptoms: Fever, Sore Throat, Dry Cough, Loss of Smell/Taste, Body Pains?&nbsp<br>(Ikaw ba ay nakararanas ng kahit anong sintomas tulad ng: Lagnat, Namamagang lalamunan, Tuyong Ubo, Pagkawala ng panglasa/pang amoy, pananakit ng katawan?)</label>

          <div class="my-4 row ">

            <div class="form-check col">
              <input type="radio" id="symp_toms"name="symptoms" value="Yes" class="form-check-input" required>
              <label class="form-check-label" for="symp_toms">Yes!(Oo)</label>
            </div>

            <div class="form-check col">
              <input type="radio" id="simptomas"name="symptoms" value="No"  class="form-check-input" required>
              <label class="form-check-label" for="simptomas">No(Hindi)</label>
            </div>

          </div>


          <label class="form-check-label" for="same-address">Have you had a direct contact with a probable, suspected or COVID19 positive patient, travelled outside the Philippines or outside your municipality?.&nbsp<br>(Ikaw ba ay nagkaroon ng close contact sa posible, suspected positibong pasyente ng COVID19, nag tungo sa labas ng Pilipinas o munisipalidad?)</label>

          <div class="my-4 row ">
            <div class="form-check col">
              <input type="radio" id="travelledYes"name="travelled" value="Yes"  class="form-check-input" required>
              <label class="form-check-label" for="travelledYes">Yes!(Oo)</label>
            </div>

            <div class="form-check col">
              <input type="radio" id="travelledNo"name="travelled" value="No" class="form-check-input" required>
              <label class="form-check-label" for="travelledNo">No(Hindi)</label>
            </div>
          </div>

          <div >
            <div >
            <label visited="true" class="form-check-label" for="travloc">If yes, where:</label>
            <input visited="true" type="text" class="text-line form-control" id="travloc" required>
            <div visited="true" id="travloc" class="hide invalid-feedback">
            This field  is required.
            </div>
            </div>          
          </div>

        <hr class="my-4">

        <div class="mb-5">
        <!--  PARMAGBIGAY NG ESPASYO SA CONTINUE BUTTON -->

          <h5 class="mb-3">Declaration and Data Privacy Consent Form:</h5>
          <label class="form-check-label" for="same-address">I hereby authorize TELFORD,  to collect and process the data indicated herein for the purpose of contract tracing effecting control of COVID-19s transmission, I understand that my personal information is protected by RA 10173 or the data privacy act of 2012 and this form will be destroyed after 30 days from the date of accomplishment, following the National Archives of the Philippines Protocol.</label>
        </div>

        <button class="w-100 btn btn-primary btn-lg" id="submit" name="submit" type="submit">Continue to Submit</button>
      </form>
    </div>
    </main>

  <footer class="pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2020-2021 TELFORD Svc. Phils. Inc.</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="msg">Privacy</a></li>
      <li class="list-inline-item"><a href="msg">Terms</a></li>
      <li class="list-inline-item"><a href="msg">Support</a></li>
    </ul>
  </footer>
</div>


<!------------------------------------------------------------------>
<script src="js/search-employee.js"></script>
<!------------------------------------------------------------------>
<script src="./js/time_date.js"></script>
<!------------------------------------------------------------------>
<script src="./js/travel_locaiton.js"></script>
<!------------------------------------------------------------------>
<script src="./js/form-validation.js"></script>
<!------------------------------------------------------------------>
<script src="assets/dist/js/bootstrap.bundle.min.js"></script>
<!------------------------------------------------------------------>
<!-- Sweetalert Core --> 
<script src="./js/sweetalert.min.js"></script>
<!------------------------------------------------------------------>

  </body>
</html>
