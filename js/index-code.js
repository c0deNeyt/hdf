
/* ==========================================================================
   #ALL ABOUT FUNTION IN INDEX.PHP BELOW
   ========================================================================== */

    /* ==========================================================================
           #KAPAG ANG ORAS AY TUMATAKBO
           ========================================================================== */
            function bigyan_mo_ng_oras_ang_sarili() {
                var x = new Date()
                var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';

                var x1 =  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
                document.getElementById("time").value = x1;
                iniwankaparin();
                 }
             function iniwankaparin(){
                var refresh=1000; // Refresh rate in milli seconds
                mytime=setTimeout('bigyan_mo_ng_oras_ang_sarili()',refresh)
                }
                iniwankaparin();

        /* ==========================================================================
           #KAPAG IKAW AY PUMINDOT NG YES SA VISITED PLACE
           ========================================================================== */

    jQuery(function ($){
            $('#travelledYes').change(function () 
                {
                $('input[visited="true"]').toggle(this.checked)
                $('label[visited="true"]').toggle(this.checked)
                $('input[visited="true"]').attr("required", true);

            })
                .change();//initialize with correct display state 
        });

        $('#travelledNo').change(function() {
            if($('#travelledNo').is(':checked')){
            $('input[visited="true"]').attr("required", false);
               $("input[visited='true']").hide();
               $("label[visited='true']").hide();
            } else {
                $("input[visited='true']").hide();
                $("label[visited='true']").hide();
            }
        }).change();

        /* ==========================================================================
           # WHEN TRAVELLED NO IS CLICKED IF THERE IS A TRAVLOC INPUT CLEAR THAT
           # TRY LANG ENGLISH
           ========================================================================== */

        $('input[name="travelled"]').on('click', function() {
              if ($(this).val() === '') {
                $('#travloc').prop('disabled', false);
              } else {
                $('#travloc').prop("disabled", false).val('');
              }
            });

 /* ==========================================================================
           #KAPAG IKAW AY PUMINDOT NG NO SA WILLING TO HAVE VACCINE
           ========================================================================== */

    jQuery(function ($){
            $('#willingNo').change(function () 
                {
                $('input[willing="true"]').toggle(this.checked)
                $('label[willing="true"]').toggle(this.checked)
                $('input[willing="true"]').attr("required", true);

            })
                .change();//initialize with correct display state 
        });

        $('#willingYes').change(function() {
            if($('#willingYes').is(':checked')){
            $('input[willing="true"]').attr("required", false);
               $("input[willing='true']").hide();
               $("label[willing='true']").hide();
            } else {
                $("input[willing='true']").hide();
                $("label[willing='true']").hide();
            }
        }).change();

        /* ==========================================================================
           # WHEN willing yes IS CLICKED IF THERE IS A whyNo INPUT CLEAR THAT
           # TRY LANG ENGLISH
           ========================================================================== */

        $('input[name="willing"]').on('click', function() {
              if ($(this).val() === '') {
                $('#whyNo').prop('disabled', false);
              } else {
                $('#whyNo').prop("disabled", false).val('');
              }
            });

//above function is end here.

    $(document).ready(function() {
// PREVENT EMPID FROM INPUTING Alpha char
                $('#empid_1').keypress(function (event) {
                    return isNumber(event, this)
                });
                 $('#btemp').keypress(function (event) {
                    return isNumber(event, this)
                });
//PREVENT FIRSTNAME FROM INPUTING Numeric char
                $('#firstname_1').keypress(function (event) {
                    return isAlpha(event, this)
                });
            });

// THE SCRIPT THAT CHECKS IF THE KEY PRESSED IS A NUMERIC, ALPHA OR DECIMAL VALUE.
    function isNumber(evt, element) {

        var charCode = (evt.which) ? evt.which : event.keyCode

        if (
            (charCode != 45 || $(element).val().indexOf('-') != -1) &&      // Check minus and only once.
            (charCode != 46 || $(element).val().indexOf('.') != -1) &&      // Check dot and only once.
            (charCode < 48 || charCode > 57))
           return false;
        
    } 
     function isAlpha(evt, element) {

        var charCode = (evt.which) ? evt.which : event.keyCode

        if (
            (charCode != 45 || $(element).val().indexOf('-') != -1) &&      // Check minus and only once.
            (charCode != 46 || $(element).val().indexOf('.') != -1) &&      // Check dot and only once.
            (charCode < 48 || charCode > 57))
           return true; return false;
        
    } 

    /* ==========================================================================
   # IF SYMPTOMS CHECKED YES THEN ALERT AND SEND A EMAIL
   ========================================================================== */   

     function magbigay_ng_liham_kung_may_simptomas() {  
            var checkRadio      = document.querySelector('#symp_toms:checked');
            var btemp           = $("input[name='btemp']").val(); 
            var empid           = document.getElementById("empid_1").value
            var fname           = document.getElementById("firstname_1").value
            var lname           = document.getElementById("lastname_1").value
            var time            = document.getElementById("time").value
            var date            = document.getElementById("date").value
            var btemp           = document.getElementById("btemp").value     
              
            
            if ((btemp >= 37.60) && (checkRadio != null )) {

                Email.send({
                                Host: "smtp.gmail.com",
                                Username : "telford.mis.hdf.developer@gmail.com",
                                Password : "ifgvpkzugyxkzooc",
                                To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                                From : "telford.mis.hdf.developer@gmail.com",
                                Subject : "COVID19 Symptoms and Higher Body Temperature than Normal.",
                                Body : "To whom it may concern,"+
                                "<br/>" + "<br/>" + "<br/>" +
                                "Please accept this letter as notification regarding our employee." +
                                "<br/>" +
                                "Kindly see details below for your reference."+
                                "<br/>" + "<br/>" +
                                "Employee ID:   " + empid + "<br/>" +
                                "Employee Name:   " + fname + '  ' + lname + "<br/>" + 
                                "Body temperature:   " + btemp + "<br/>" + 
                                "Time and Date of Declaration:   " + time + ' ' + ' ' + date + 
                                "<br/>"+ "<br/>"+ "<br/>"+
                                "Note:" + 
                                "<br/>"+
                                "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                                "<br/>"+ "<br/>",
                       
                    })

            } 
             else if((btemp <= 37.50) && (checkRadio != null )){ 
                   Email.send({
                                Host: "smtp.gmail.com",
                                Username : "telford.mis.hdf.developer@gmail.com",
                                Password : "ifgvpkzugyxkzooc",
                                To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                                From : "telford.mis.hdf.developer@gmail.com",
                                Subject : "COVID19 Symptoms.",
                                Body : "To whom it may concern,"+
                                "<br/>" + "<br/>" + "<br/>" +
                                "Please accept this letter as notification regarding our employee." +
                                "<br/>" +
                                "Kindly see details below for your reference."+
                                "<br/>" + "<br/>" +
                                "Employee ID:   " + empid + "<br/>" +
                                "Employee Name:   " + fname + '  ' + lname + "<br/>" + 
                                "Body temperature:   " + btemp + "<br/>" + 
                                "Time and Date of Declaration:   " + time + ' ' + ' ' + date + 
                                "<br/>"+ "<br/>"+ "<br/>"+
                                "Note:" + 
                                "<br/>"+
                                "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                                "<br/>"+ "<br/>",
                       
                    })
            } 
             else if ((btemp >= 37.60) && (checkRadio != true )){ 

                 Email.send({
                                Host: "smtp.gmail.com",
                                Username : "telford.mis.hdf.developer@gmail.com",
                                Password : "ifgvpkzugyxkzooc",
                                To : "mariarizalinacortez@astigp.com, leelipkeng@astigp.com, mellobo@astigp.com, ivenponiente@astigp.com, telford_clinic_ph@astigp.com, telford_mis_ph@astigp.com",
                                From : "telford.mis.hdf.developer@gmail.com",
                                Subject : "Higher Body Temperature than Normal",
                                Body : "To whom it may concern,"+
                                "<br/>" + "<br/>" + "<br/>" +
                                "Please accept this letter as notification regarding our employee." +
                                "<br/>" +
                                "Kindly see details below for your reference."+
                                "<br/>" + "<br/>" +
                                "Employee ID:   " + empid + "<br/>" +
                                "Employee Name:   " + fname + '  ' + lname + "<br/>" + 
                                "Body temperature:   " + btemp + "<br/>" + 
                                "Time and Date of Declaration:   " + time + ' ' + ' ' + date + 
                                "<br/>"+ "<br/>"+ "<br/>"+
                                "Note:" + 
                                "<br/>"+
                                "☺ This mail is autogenerated by the HDF Developer. Do not reply. ☺" + 
                                "<br/>"+ "<br/>",
                    })
                 
            }
            else{}

        }   
 
/* ==========================================================================
   # SUBMIT BUTTON FUNCTION
   ========================================================================== */ 
   /* ==========================================================================
   # IF SYMPTOMS CHECKED YES THEN ALERT
   ========================================================================== */ 
   /* ==========================================================================
   # TEMPERATURE VALIDATION 
   ========================================================================== */       


$('#register').click(function(e){
    var valid = this.form.checkValidity();

    if(valid){

    var btemp           = $("input[name='btemp']").val();
    var empid           = $("input[name='empid']").val();
    var fname           = $("input[name='fname']").val();
    var lname           = $("input[name='lname']").val();
    var time            = $('#time').val();
    var date            = $('#date').val();
    var symptoms        = $("input[name='symptoms']:checked").val();
    var travelled       = $("input[name='travelled']:checked").val();
    var travloc         = $('#travloc').val();
    var willing       = $("input[name='willing']:checked").val();
    var whyNo         = $('#whyNo').val();
    var cbx             = $('#cbx').val();
    
        e.preventDefault(); 
            $.ajax({
                type: 'POST',
                url: './php/process.php',
                data: {btemp: btemp,empid: empid,fname: fname,lname: lname,time: time,date: date, symptoms: symptoms, travelled: travelled, travloc: travloc, willing: willing, whyNo: whyNo, cbx: cbx},
                cache : false, 
                    success: function(data){

                        var btemp           = document.getElementById("btemp").value 
                        var checkRadio      = document.querySelector('#symp_toms:checked');

                            if ((checkRadio != null ) && (btemp >= 37.60)) {

                                    var notif = "<b>" + "You have selected YES and higher body temperature than normal." + "</b>" + "<br>"+ "<br>"+
                                                "Please inform the SECURITY GUARD to call the nurse\n"+
                                                "on duty for assessment and proceed to the isolation area."  + "<br>" + "<br>"+ "<br>"

                                    Swal.fire({
                                        'type': 'error',
                                        'title': 'WARNING!',
                                        'html': '<b style="color: red;  font-family: Arial, Helvetica, sans-serif;">' + notif + '</b>',
                                        'showConfirmButton': false,
                                        'allowOutsideClick': false,
                                        'allowEscapeKey': false,
                                        'allowEnterKey': false,
                                        
                                        })
            
                                }

                            else if (btemp >= 37.60){
                    
                                var notif = "<b>" + "Your temp is higher than normal body temperature." + "</b>" + "<br>"+ "<br>"+
                                            "Please inform the SECURITY GUARD to call the nurse"+ "<br>"+
                                            "on duty for assessment and proceed to the isolation area." + "<br>" + "<br>"+ "<br>"

                                Swal.fire({
                                    'type': 'error',
                                    'title': 'WARNING!',
                                    'html': '<b style="color: red;  font-family: Arial, Helvetica, sans-serif; ">' + notif + '</b>',
                                    'showConfirmButton': false,
                                    'allowOutsideClick': false,
                                    'allowEscapeKey': false,
                                    'allowEnterKey': false,
                                    
                                    })

                            } 
                            else if (checkRadio != null ){

                                    var notif = "<b>" + "You have selected YES." + "</b>" + "<br>"+ "<br>"+
                                                "Please inform the SECURITY GUARD to call the nurse\n"+
                                                "on duty for assessment and proceed to the isolation area."  + "<br>" + "<br>"+ "<br>"

                                    Swal.fire({
                                        'type': 'error',
                                        'title': 'WARNING!',
                                        'html': '<b style="color: red;  font-family: Arial, Helvetica, sans-serif;">' + notif + '</b>',
                                        'showConfirmButton': false,
                                        'allowOutsideClick': false,
                                        'allowEscapeKey': false,
                                        'allowEnterKey': false,
                                        
                                        })
            
                                }

                                else {

                                    Swal({
                                          title: "Good job!",
                                          text: "You clicked the button!",
                                          icon: "success",
                                          button: "Aww yiss!",
                                          
                                        });
                                        // .then(function(){
                                        //        window.location.href = "index.php";
                                        //     }); 

                                    } 


                        },

                        error: function(data){
                            Swal.fire({
                                    'title': 'Errors',
                                    'text': 'There were errors while saving the data.',
                                    'type': 'error'
                                    })
                        },


            });

        } else {

        }


}); 

/* ==========================================================================
   #ALL ABOUT NANAMAN SA FUNTION NG IN INDEX.PHP 
   ========================================================================== */

     $(function GlobalFunciton(){



/* ==========================================================================
   # /AUTO COMPLETE CODE 
   ========================================================================== */  

            /* ==========================================================================
               #FUNCTION WHEN PRESSING A TAB on emp input event yeaahhhhh!
               ========================================================================== */
                 $(document).on('keydown', "input[name='empid']",function(e){

                    if (e.keyCode === 9) {

                                 event.preventDefault();
                                     var empid           = $("input[name='empid']").val();
                        
                                    $.ajax({
                                    type: 'POST',
                                    url: './php/getDetails.php',
                                    data: {empid: empid, request: 3},
                                    cache : false,
                                    dataType: "json",
                                    success:function(response){
                                        var len = response.length;

                                            if(len > 0){
                                                var fname = response[0]['fname'];
                                                var lname = response[0]['lname'];
                                                    
                                                //from your htmm id
                                                $('#firstname_1').val(fname);
                                                $('#lastname_1').val(lname);
                                                
                                            }   

                                    },

                                });
                            };

                 });
/* ==========================================================================
   #FUNCTION WEHN YOU CLICK OUTSIDE THE EMPID INPUT BOX
   ========================================================================== */

        var empidsearch = document.querySelector("[name=empid]");

            empidsearch.addEventListener("blur", function(){

                var empid           = $("input[name='empid']").val();
                        
                        $.ajax({
                        type: 'POST',
                        url: './php/getDetails.php',
                        data: {empid: empid, request: 3},
                        cache : false,
                        dataType: "json",
                        success:function(response){
                            var len = response.length;

                                if(len > 0){
                                    var fname = response[0]['fname'];
                                    var lname = response[0]['lname'];
                                        
                                    //from your htmm id
                                    $('#firstname_1').val(fname);
                                    $('#lastname_1').val(lname);
                                    
                                }   

                        },

                    });

                }); 

/* ==========================================================================
   #FUNCTION WHEN PRESSING A ENTER AND TYPING
   ========================================================================== */            

                 $(document).on('keyup',"input[name='empid']", function(e) {

                             if (e.keyCode === 13) {
                               event.preventDefault();
                                     var empid           = $("input[name='empid']").val();
                        
                                    $.ajax({
                                    type: 'POST',
                                    url: './php/getDetails.php',
                                    data: {empid: empid, request: 3},
                                    cache : false,
                                    dataType: "json",
                                    success:function(response){
                                        var len = response.length;

                                            if(len > 0){
                                                var fname = response[0]['fname'];
                                                var lname = response[0]['lname'];
                                                    
                                                //from your htmm id
                                                $('#firstname_1').val(fname);
                                                $('#lastname_1').val(lname);
                                                
                                            }   

                                    },

                                });

                            };
                            
                            var id = this.id;
                            var splitid = id.split('_');
                            var index = splitid[1];

                            //ALL ABOUT AUTO COMPLETE FUNCTION WHEN TYPING INSIDE EMPID INPUT BOX
                            $( '#empid_1').autocomplete({
                                source: function( request, response ) {

                                    //showing your search data
                                    $.ajax({
                                        url: "./php/getDetails.php",
                                        type: 'post',
                                        dataType: "json",
                                        data: {
                                            search: request.term,request:1
                                        },
                                        success: function( data ) {
                                            response( data );
                                        }
                                    });
                                },
                                select: function (event, ui) {
                                    $(this).val(ui.item.label); // display the selected text
                                    var userid = ui.item.value; // selected id to input

                                    // posting your selected id to the fname and lname input box
                                    $.ajax({
                                        url: './php/getDetails.php',
                                        type: 'post',
                                        data: {userid:userid,request:2},
                                        dataType: 'json',
                                        success:function(response){
                    
                                            var len = response.length;

                                            if(len > 0){
                                                var id = response[0]['id'];
                                                var fname = response[0]['fname'];
                                                var lname = response[0]['lname'];
                                                
                                            //from your htmm id
                                                document.getElementById('lastname_'+index).value = lname;
                                                document.getElementById('firstname_'+index).value = fname;

                                                
                                            }
                                        }
                                    });

                                    return false;
                                }
                            });


                     });   

        });
    