

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

 
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        // INITAILIZATION OF VARIABLES...
        var btemp           = $("input[name='btemp']").val();
        var empid           = $("input[name='empid']").val();
        var fname           = $("input[name='fname']").val();
        var dept            = $("input[name='lname']").val();
        var time            = $('#time').val();
        var date            = $('#date').val();
        var symptoms        = $("input[name='symptoms']:checked").val();
        var travelled       = $("input[name='travelled']:checked").val();
        var willing         = $("input[name='willing']:checked").val();
        var vacRegistered   = $("input[name='vacRegistered']:checked").val();
        var takedVac        = $("input[name='vaccinated']:checked").val();
        var tempTravLoc     = document.getElementById("travloc");
        var tempWhyNo       = document.getElementById("whyNo");
        var tempregLoc      = document.getElementById("regLoc");
        var tempVacTaken    = document.getElementById("vacDate");
        var tempdosetype    = document.getElementById("dosetype");
        var tempbakunatype  = document.getElementById("bakunatype");

        // CHECKING THE VALIDITY OF INPUTS INSIDE FORM
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }  
        else {
          event.preventDefault();
          var travloc = null;
          var whyNo = null;
          var regLoc = null;
          var vacDate = null;
          var dosetype = null;
          var bakunatype = null;
          if (tempTravLoc) {
           travloc =  tempTravLoc.value.toUpperCase();
          }
          if (tempWhyNo) {
            whyNo =  tempWhyNo.value.toUpperCase();
          }
          if (tempregLoc) {
            regLoc =  tempregLoc.value.toUpperCase();
          }
          if (tempVacTaken) {
            vacDate =  tempVacTaken.value;
          }
          if (tempdosetype) {
            dosetype =  tempdosetype.value;
          }
          if (tempbakunatype) {
            bakunatype =  tempbakunatype.value;
          }
          $.ajax({
            type: 'POST',
            url: './php/process.php',
            data:{btemp           : btemp,
                  empid           : empid,
                  fname           : fname,
                  dept            : dept,
                  time            : time,
                  date            : date,
                  symptoms        : symptoms,
                  travelled       : travelled,
                  travloc         : travloc,
                  willing         : willing,
                  whyNo           : whyNo,
                  vacRegistered   : vacRegistered,
                  registrationLoc : regLoc,
                  takedVac        : takedVac,
                  vacDate         : vacDate,
                  dosetype        : dosetype,
                  bakunatype      : bakunatype
            },
            cache : false, 
            success: function(){

              var btemp           = document.getElementById('btemp').value 
              var checkRadio      = document.querySelector('#symp_toms:checked');
              var SwalColors = {red: "rgba(209, 10, 10, 0.77)",
                                green: "rgba(10, 209, 60, 0.50)"
              };
              
              function SwalOverlayColor(color){
                setTimeout(function(){
                  $(".swal-overlay").css({"background-color":SwalColors[color]});
                },200);
              };

              if (checkRadio != null  && btemp >= 37.60) {

                Email.send({
                  Host: "smtp.gmail.com",
                  Username : "telford.mis.hdf.developer@gmail.com",
                  Password : "ofdtqxrgwapczvet",
                  To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, charitylanceta@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                  // To : "chanchristianarana@gmail.com",
                  From : "telford.mis.hdf.developer@gmail.com",
                  Subject : "COVID19 Symptoms and Higher Body Temperature than Normal.",
                  Body : "To whom it may concern,"+
                  "<br/>" + "<br/>" + "<br/>" +
                  "Please accept this letter as notification regarding our employee." +
                  "<br/>" +
                  "Kindly see details below for your reference."+
                  "<br/>" + "<br/>" +
                  "Employee ID:   " + empid + "<br/>" +
                  "Employee Name:   " + fname + "<br/>" + 
                  "Body temperature:   " + btemp + "<br/>" + 
                  "Symptoms :   " + symptoms + "<br/>" + 
                  "Inputed travel location :   " + travloc + "<br/>" +
                  "Time and Date of Declaration:   " + time + ' ' + ' ' + date + 
                  "<br/>"+ "<br/>"+ "<br/>"+
                  "Note:" + 
                  "<br/>"+
                  "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                  "<br/>"+ "<br/>",
                      
                });
                const wrapper     = document.createElement('div');
                wrapper.innerHTML ="<span style='font-size: 18px; color:red; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;'>" +
                            "You have COVID19 symptoms and higher body temperature than normal." + "</span>" + "<br>"+ "<br>"+
                            "Please inform the SECURITY GUARD to call the nurse\n"+
                            "on duty for assessment and proceed to the isolation area."  + "<br>" + "<br>"+ "<br>";                  
                SwalOverlayColor("red");
                swal({
                  title: "WARNING!",
                  content:  wrapper,
                  icon: "error",
                  closeOnClickOutside: false,
                  closeOnEsc: false,
                  allowOutsideClick: false,
                  buttons: {
                    confirm: {
                      text: "",
                      value: false,
                      visible: false,
                      className: "",
                      closeModal: false
                    }, 
                  },
                });
              } 
              else if (btemp >= 37.60 && checkRadio == null){

                Email.send({
                  Host: "smtp.gmail.com",
                  Username : "telford.mis.hdf.developer@gmail.com",
                  Password : "ofdtqxrgwapczvet",
                  To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, charitylanceta@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                  // To : "telford_mis_ph@astigp.com",
                  // To : "chanchristianarana@gmail.com",
                  From : "telford.mis.hdf.developer@gmail.com",
                  Subject : "Higher Body Temperature than Normal",
                  Body : "To whom it may concern,"+
                  "<br/>" + "<br/>" + "<br/>" +
                  "Please accept this letter as notification regarding our employee." +
                  "<br/>" +
                  "Kindly see details below for your reference."+
                  "<br/>" + "<br/>" +
                  "Employee ID:   " + empid + "<br/>" +
                  "Employee Name:   " + fname + "<br/>" + 
                  "Body temperature:   " + btemp + "<br/>" +
                  "Symptoms :   " + symptoms + "<br/>" + 
                  "Inputed travel location :   " + travloc + "<br/>" + 
                  "Time and Date of Declaration:   " + time + ' ' + ' ' + date + 
                  "<br/>"+ "<br/>"+ "<br/>"+
                  "Note:" + 
                  "<br/>"+
                  "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                  "<br/>"+ "<br/>",
                });
                const wrapper     = document.createElement('div');
                wrapper.innerHTML = "<span style='font-size: 18px; color:red; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;'>" +
                              "Your temp is higher than normal body temperature." + "</span>" + "<br>"+ "<br>"+
                            "Please inform the SECURITY GUARD to call the nurse"+ "<br>"+
                            "on duty for assessment and proceed to the isolation area." + "<br>" + "<br>"+ "<br>";
                SwalOverlayColor("red");
                swal({
                  title: "WARNING!",
                  content:  wrapper,
                  icon: "error",
                  closeOnClickOutside: false,
                  closeOnEsc: false,
                  allowOutsideClick: false,
                  buttons: {
                    confirm: {
                      text: "",
                      value: false,
                      visible: false,
                      className: "",
                      closeModal: false
                    }, 
                  },
                });
              } 
              else if (btemp <= 37.50 && checkRadio != null ){

                Email.send({
                            Host: "smtp.gmail.com",
                            Username : "telford.mis.hdf.developer@gmail.com",
                            Password : "ofdtqxrgwapczvet",
                            To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, charitylanceta@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                            // To : "telford_mis_ph@astigp.com",
                            // To : "chanchristianarana@gmail.com",
                            From : "telford.mis.hdf.developer@gmail.com",
                            Subject : "COVID19 Symptoms.",
                            Body : "To whom it may concern,"+
                            "<br/>" + "<br/>" + "<br/>" +
                            "Please accept this letter as notification regarding our employee." +
                            "<br/>" +
                            "Kindly see details below for your reference."+
                            "<br/>" + "<br/>" +
                            "Employee ID:   " + empid + "<br/>" +
                            "Employee Name:   " + fname + "<br/>" + 
                            "Body temperature:   " + btemp + "<br/>" +
                            "Symptoms :   " + symptoms + "<br/>" + 
                            "Inputed travel location :   " + travloc + "<br/>" + 
                            "Time and Date of Declaration:   " + time + ' ' + ' ' + date + 
                            "<br/>"+ "<br/>"+ "<br/>"+
                            "Note:" + 
                            "<br/>"+
                            "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                            "<br/>"+ "<br/>",   
                });
                const wrapper     = document.createElement('div');
                wrapper.innerHTML = "<span style='font-size: 18px; color:red; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;'>" + 
                "You have COVID19 symptoms." +"</span>" + "<br>"+ "<br>"+
                "Please inform the SECURITY GUARD to call the nurse\n"+
                "on duty for assessment and proceed to the isolation area."  + "<br>" + "<br>"+ "<br>";
                SwalOverlayColor("red");
                    swal({
                          title: "WARNING!",
                          content:  wrapper,
                          icon: "error",
                          closeOnClickOutside: false,
                          closeOnEsc: false,
                          allowOutsideClick: false,
                          buttons: {
                            confirm: {
                              text: "",
                              value: false,
                              visible: false,
                              className: "",
                              closeModal: false
                            }, 
                          },
                    });
              }
              else {
                $(document).ready(function(){
                  var myStr = $("#travloc").val();
                  var myStr2 = $("#whyNo").val();
                  var trimStr = $.trim(myStr);
                  var trimStr2 = $.trim(myStr2);
                  $('#travloc').val(trimStr)
                  $('#whyNo').val(trimStr2)
                });

                const wrapper     = document.createElement('div');
                wrapper.innerHTML = "<span style='font-size: 20px; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;'>" +
                        fname + "</span>" + "<br>" +
                        "Your Health Declaration Form is successfully saved as of:" + "<br>" +
                        "<span style='font-size: 20px; color: green; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;'>" +
                        time + " " + date + "</span>";

                SwalOverlayColor("green");
                swal({
                  title: "Thank You! Stay Safe...",
                  content:  wrapper,
                  icon: "success",
                  closeOnClickOutside: false,
                  closeOnEsc: false,
                  allowOutsideClick: false,
                  buttons: {
                    confirm: {
                      text: "Done!",
                      value: true,
                      visible: true,
                      className: "",
                      closeModal: true
                    }, 
                  },
                })
                .then(function(){
                  window.location.href = "index.php";
                });
              }; 
            
            },
          });

        };
        form.classList.add('was-validated')
      }, false)
    })
})()

