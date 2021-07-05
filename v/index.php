
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Christian Araña, and open source Contributors">
    <link rel="icon" href="../img_ico/ico/asti.ico"  type="image/x-icon">
    <title>TELFORD Svc. Phils. Inc.</title>
    
    <!------------------------------------------------------------------>
        <!-- Bootstrap core CSS/JS -->
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
    <!------------------------------------------------------------------>
    <link href="../css/index.css" rel="stylesheet">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

      <!-- SEARCH JS/css -->
    <script src="../js/jquery-3.6.0.min.js"></script>
    <!------------------------------------------------------------------>
    <script defer src="../assets/dist/js/bootstrap.bundle.min.js" type="text/javascript"></script>  
    <!------------------------------------------------------------------>
    <!-- EMAIL -->
    <script src="https://smtpjs.com/v3/smtp.js"></script> 
    <!------------------------------------------------------------------>
    <script defer src = "../js/additional_features.js"></script>
    <!------------------------------------------------------------------>
    <script defer src="../js/time_date.js"></script>
    <!------------------------------------------------------------------>
    <script defer src="../js/form-validation-visitor.js"></script>
    <!------------------------------------------------------------------>
    <script defer src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    <!------------------------------------------------------------------>
    <!-- Sweetalert Core --> 
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.all.min.js"></script>
    <!------------------------------------------------------------------>
    <script src="https://use.fontawesome.com/5fe0351dea.js"></script>
    <!------------------------------------------------------------------>


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
      <h5 class="form-check-label">Please fill in the appropriate answer.</h5>
      <p class="form-check-label">(Mangyaring punan ang naaangkop na sagot)</p>
      <form class="needs-validation" novalidate >

        <div class="row g-3">
          <div class="col-sm-6">
            <label for="visitortype" class="form-label">Visitor Type</label>
            <select class="visitortype form-select" id="visitortype" name="visitortype" required>
              <option selected disabled value="" class="form-control">Choose...</option>
                    <option value="Applicant">Applicant</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Customer">Customer</option>
                    <option value="Supplier">Supplier</option>
                    <option value="Applicant">Security Staff</option>
                    <option value="Others">Others</option>
            </select>
          </div>
          <div class="col-sm-6" >
            <label for="btemp" class="form-label">Body Temperature</label>
            <input type="number" class="form-control" name="btemp" min="34" max="45" step="0.1" id="btemp" required>
            <div class="invalid-feedback">
              Valid body temperature is required.
            </div>
          </div>

          <div class="col-sm-6">
            <label for="firstname_1" class="form-label">Full Name</label>
            <input  type="text" class="form-control" id="firstname_1" name="fname" required="required">
          </div>

          <div class="col-sm-6 ">
            <label for="coname" class="form-label">Company Name</label>
            <input type="text" 
            class="form-control" id="coname" name="coname" required="required">
          </div>

          <div class="col-sm-6">
            <label for="contactnumber" class="form-label">Contact Number</label>
            <input  type="number" class="form-control" id="contactnumber" name="contactnumber" required="required">
          </div>

          <div class="col-sm-6 ">
            <label for="address" class="form-label">Personal Address</label>
            <input type="text" 
            class="form-control" id="address" name="address" required="required">
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

            <div class = "fistQues">
              <label class="form-check-label mt-5" for="same-address">Are you currently experiencing any type of the following symptoms: Fever, Sore Throat, Dry Cough, Loss of Smell/Taste, Body Pains?&nbsp<br>(Ikaw ba ay nakararanas ng kahit anong sintomas tulad ng: Lagnat, Namamagang lalamunan, Tuyong Ubo, Pagkawala ng panglasa/pang amoy, pananakit ng katawan?)</label>
              <div class="YesNo my-4 row">
                <div class="form-check col">
                  <input type="radio" id="symp_toms"name="symptoms" value="Yes" class="form-check-input" required>
                  <label class="form-check-label" for="symp_toms">Yes!(Oo)</label>
                </div>
                <div class="form-check col">
                  <input type="radio" id="simptomas"name="symptoms" value="No"  class="form-check-input" required>
                  <label class="form-check-label" for="simptomas">No(Hindi)</label>
                </div>
              </div>
            </div>
              <!-- FIRST QUESTION ENDS HERE -->
              <div class = "travelTracing">
                <label class="form-check-label" for="same-address">Have you had a direct contact with a probable, suspected or COVID19 positive patient, travelled outside the Philippines or outside your municipality?.&nbsp<br>(Ikaw ba ay nagkaroon ng close contact sa posible, suspected positibong pasyente ng COVID19, nag tungo sa labas ng Pilipinas o munisipalidad?)</label>
                <div class="YesNo1 my-4 row">
                  <div class="form-check col">
                    <input type="radio" id="travelledYes"name="travelled" value="Yes"  class="form-check-input" required>
                    <label class="form-check-label" for="travelledYes">Yes!(Oo)</label>
                  </div>
                  <div class="form-check col">
                    <input type="radio" id="travelledNo"name="travelled" value="No" class="form-check-input" required>
                    <label class="form-check-label" for="travelledNo">No(Hindi)</label>
                  </div>
                </div>
                <script class ="optTemplate" type = "text/x-content-template">
                  <div class = "OptInpt4TravelTracing">
                    <label class="form-check-label" for="travloc">If yes, where:</label>
                    <input type="text" class="text-line form-control" id="travloc" required>
                    <div visited="true" class="hide invalid-feedback">
                    This field  is required.
                    </div>
                  </div>
                </script>
              </div>
              <!--TRAVELTRACING ENDS HERE-->
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
      <li class="list-inline-item"><a href="../msg/indexv.html">Privacy</a></li>
      <li class="list-inline-item"><a href="../msg/indexv.html">Terms</a></li>
      <li class="list-inline-item"><a href="../msg/indexv.html">Support</a></li>
    </ul>
  </footer>
</div>

  </body>
</html>
