

        var button = document.getElementById("submit");
            
        // Disable the button on initial page load
        button.disabled = true;
        var empid     = $("input[name='empid']").val();


$(function SearchEmployee(){

    var empidsearch = document.querySelector("[name=empid]");

        empidsearch.addEventListener('change', function(){

            var empid = $("input[name='empid']").val();

            $.ajax ({
                type: 'POST',
                url: './php/getDetails.php',
                data: {empid: empid, request: 3},
                cache: false,
                dataType: 'json',
                success: function (response){
                    var len = response.length;

                        if (len > 0){
                            var fname =response[0]['fname'].toUpperCase();
                            var lname =response[0]['lname'].toUpperCase();

                            //PARSING DATA TO INPUTBOX
                            $('#firstname_1').val(fname);
                            $('#lastname_1').val(lname);

                        }else {

                            $('#firstname_1').val("Invalid Employee Number!");
                            $('#lastname_1').val("Invalid Employee Number!");
                            $('#submit').attr('disabled', true);
                        }
                },

            });

        });


    // ALL ABOUT AUTO COMPLETE FUNCTION WHEN TYPING INSIDE EMPID INPUT BOX
    $(document).on('keyup', "input[name='empid']",function(e){
            
            // $('.sendButton').attr('disabled',true);
            var empid     = $("input[name='empid']").val();


            $.ajax({
            type: 'POST',
            url: './php/getDetails.php',
            data: {empid: empid, request: 3},
            cache : false,
            dataType: "json",
            success:function(response){

                var len = response.length;

                    if(len > 0){
                        var fname = response[0]['fname'].toUpperCase();
                        var lname = response[0]['lname'].toUpperCase();
                            
                        //from your htmm id
                        $('#firstname_1').val(fname);
                        $('#lastname_1').val(lname);
                        $('#submit').attr('disabled', false);                      
                    }else {

                        $('#firstname_1').val("Invalid Employee Number!");
                        $('#lastname_1').val("Invalid Employee Number!");
                        $('#submit').attr('disabled', true);
                    }  
                },
            });

    });


});