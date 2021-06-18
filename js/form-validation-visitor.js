

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
 
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        var visitortype     = $('#visitortype').val();
        var btemp           = $("input[name='btemp']").val();
        var fname           = $("input[name='fname']").val();
        var coname          = $("input[name='coname']").val();
        var contactnumber   = $("input[name='contactnumber']").val();
        var address         = $("input[name='address']").val();
        var time            = $('#time').val();
        var date            = $('#date').val();
        var symptoms        = $("input[name='symptoms']:checked").val();
        var travelled       = $("input[name='travelled']:checked").val();
        var tempTravLoc     = document.getElementById("travloc");

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        var travloc = null;
        if (tempTravLoc) {
          travloc =  tempTravLoc.value.toUpperCase();
        }
        console.log("himmm", travelled, "|", travloc);
      }  
      else {
        event.preventDefault();
        var travloc = null;
        if (tempTravLoc) {
          travloc =  tempTravLoc.value.toUpperCase();
        }
        $.ajax({
                  type: 'POST',
                  url: '../php/process-visitor.php',
                  data: {
                          visitortype: visitortype,
                          btemp: btemp,
                          fname: fname,
                          coname: coname,
                          contactnumber: contactnumber,
                          address: address,
                          time: time,
                          date: date,
                          symptoms: symptoms,
                          travelled: travelled,
                          travloc: travloc},
                  cache : false, 
                      success: function(data){

                        var btemp           = document.getElementById("btemp").value 
                        var checkRadio      = document.querySelector('#symp_toms:checked');
                        var SwalColors = {
                                    red: "rgba(209, 10, 10, 0.77)",
                                    green: "rgba(10, 209, 60, 0.50)"                                     
                                  };

                        function SwalOverlayColor(color){
                          setTimeout(function(){
                            $(".swal-overlay").css({"background-color":SwalColors[color]});
                          },200);
                        }

                          if ((checkRadio != null ) && (btemp >= 37.60)) {

                                Email.send({
                                              Host: "smtp.gmail.com",
                                              Username : "telford.mis.hdf.developer@gmail.com",
                                              Password : "ofdtqxrgwapczvet",
                                              To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, charitylanceta@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                                              // To : "telford_mis_ph@astigp.com",
                                              From : "telford.mis.hdf.developer@gmail.com",
                                              Subject : "COVID19 Symptoms and Higher Body Temperature than Normal.",
                                              Body : "To whom it may concern,"+
                                              "<br/>" + "<br/>" + "<br/>" +
                                              "Please accept this letter as notification regarding our visitor." +
                                              "<br/>" +
                                              "Kindly see details below for your reference."+
                                              "<br/>" + "<br/>" +
                                              "Visitor ID: " + '&nbsp' + visitortype + "<br/>" +
                                              "Visitor's Name: " + '&nbsp' + fname + "<br/>" + 
                                              "Body temperature: " + '&nbsp' + btemp + "<br/>" +
                                              "Symptoms :   " + symptoms + "<br/>" + 
                                              "Inputed travel location :   " + travloc + "<br/>" + 
                                              "Company Name: " + '&nbsp' + coname + "<br/>" +
                                              "Contact Number: " + '&nbsp' + contactnumber + "<br/>" +
                                              "Address: " + '&nbsp' + address + "<br/>" +
                                              "Time and Date of Declaration: " + '&nbsp' + time + '&nbsp' + '&nbsp' + date + 
                                              "<br/>"+ "<br/>"+ "<br/>"+
                                              "Note:" + 
                                              "<br/>"+
                                              "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                                              "<br/>"+ "<br/>",
                                      
                                  })


                                  const wrapper     = document.createElement('div');
                                  wrapper.innerHTML ="<span style='font-size: 18px; color:red; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;'>" +
                                              "You have COVID19 Symptoms and higher body temperature than normal." + "</span>" + "<br>"+ "<br>"+
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
                                    })

          
                              } else if (btemp >= 37.60){

                                Email.send({
                                              Host: "smtp.gmail.com",
                                              Username : "telford.mis.hdf.developer@gmail.com",
                                              Password : "ofdtqxrgwapczvet",
                                              To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, charitylanceta@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                                              // To : "telford_mis_ph@astigp.com",
                                              From : "telford.mis.hdf.developer@gmail.com",
                                              Subject : "Higher Body Temperature than Normal",
                                              Body : "To whom it may concern,"+
                                              "<br/>" + "<br/>" + "<br/>" +
                                              "Please accept this letter as notification regarding our visitor." +
                                              "<br/>" +
                                              "Kindly see details below for your reference."+
                                              "<br/>" + "<br/>" +
                                              "Visitor ID: " + '&nbsp' + visitortype + "<br/>" +
                                              "Visitor's Name: " + '&nbsp' + fname + "<br/>" + 
                                              "Body temperature: " + '&nbsp' + btemp + "<br/>" +
                                              "Symptoms :   " + symptoms + "<br/>" + 
                                              "Inputed travel location :   " + travloc + "<br/>" + 
                                              "Company Name: " + '&nbsp' + coname + "<br/>" +
                                              "Contact Number: " + '&nbsp' + contactnumber + "<br/>" +
                                              "Address: " + address + "<br/>" +
                                              "Time and Date of Declaration: " + '&nbsp' + time + '&nbsp' + '&nbsp'+ date + 
                                              "<br/>"+ "<br/>"+ "<br/>"+
                                              "Note:" + 
                                              "<br/>"+
                                              "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                                              "<br/>"+ "<br/>",
                                })

                  
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
                                    })

                          } 
                          else if (checkRadio != null ){

                                  Email.send({
                                              Host: "smtp.gmail.com",
                                              Username : "telford.mis.hdf.developer@gmail.com",
                                              Password : "ofdtqxrgwapczvet",
                                              To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, charitylanceta@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                                              // To : "telford_mis_ph@astigp.com",
                                              From : "telford.mis.hdf.developer@gmail.com",
                                              Subject : "COVID19 Symptoms.",
                                              Body : "To whom it may concern,"+
                                              "<br/>" + "<br/>" + "<br/>" +
                                              "Please accept this letter as notification regarding our visitor." +
                                              "<br/>" +
                                              "Kindly see details below for your reference."+
                                              "<br/>" + "<br/>" +
                                              "Visitor ID: " + '&nbsp' + visitortype + "<br/>" +
                                              "Visitor's Name: " + '&nbsp' + fname + "<br/>" + 
                                              "Body temperature: " + '&nbsp' + btemp + "<br/>" +
                                              "Symptoms :   " + symptoms + "<br/>" + 
                                              "Inputed travel location :   " + travloc + "<br/>" + 
                                              "Company Name:" + '&nbsp' + coname + "<br/>" +
                                              "Contact Number: " + '&nbsp' + contactnumber + "<br/>" +
                                              "Address: " + '&nbsp' + address + "<br/>" +
                                              "Time and Date of Declaration: " + '&nbsp' + time + '&nbsp'+ '&nbsp'+ date + 
                                              "<br/>"+ "<br/>"+ "<br/>"+
                                              "Note:" + 
                                              "<br/>"+
                                              "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                                              "<br/>"+ "<br/>",
                                      
                                  })

                                  const wrapper     = document.createElement('div');
                                  wrapper.innerHTML = "<span style='font-size: 18px; color:red; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;'>" + 
                                              "You have COVID19 Symptoms." +"</span>" + "<br>"+ "<br>"+
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
                                    })
                              }

                              else {

                                    const wrapper     = document.createElement('div');
                                    wrapper.innerHTML = "<span style='font-size: 20px; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;'>" +
                                            "Company Name:" + " "+ fname + "<br>" + "<br>" + 
                                            "Company Name:" + " " +coname + "</span>" + "<br>" +
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
                                                    window.location.href = "../v/index.php";
                                                });


                              } 
                          
                      }
        });
      } 

        form.classList.add('was-validated')
      }, false)
    })
})()

