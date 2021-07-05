
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
    