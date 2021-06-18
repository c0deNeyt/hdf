
$(document).ready(function(){

    // DISABLE THE BUTTON WHEN PAGE IS LOAD
    $('#submit').attr('disabled', true);

    $(document).on('change', '#empid_1', function() {
        var temp = $("input[name='empid']").val();
        var empid = $.trim(temp);

        $.ajax ({
            type: "POST",
            url: "./php/getDetails.php",
            data: {empid: empid, request: 2},
            cache: false,
            dataType: "json",
            success: function (response){
                var len = response.length;

                    if (len > 0){
                        var fname =response[0]['fname'].toUpperCase();
                        var DEPARTMENT =response[0]['dept'].toUpperCase();

                        //PARSING DATA TO INPUTBOX
                        $('#submit').attr('disabled', false);
                        $('#firstname_1').val(fname);
                        $('#lastname_1').val(DEPARTMENT);
                    }
                    else {
                        $('#submit').attr('disabled', true);
                        $('#lastname_1, #firstname_1')
                        .val("")
                        .attr("placeholder", "Invalid Employee Number! 😡")
                        .css({
                            "color": "red",
                            "border": "1px solid red"
                        });
                    };
                  
            },

        });

    });


    $(document).on("keyup", "input[name='empid']", function (e){

        var temp = $("input[name='empid']").val();
        var empid = $.trim(temp);
        $.ajax ({
            type: "POST",
            url: "./php/getDetails.php",
            data: {empid: empid, request: 2},
            cache: false,
            dataType: "json",
            success: function (response){
                var len = response.length;

                    if (len > 0){
                        var fname =response[0]['fname'].toUpperCase();
                        var DEPARTMENT =response[0]['dept'].toUpperCase();

                        //PARSING DATA TO INPUTBOX
                        $('#submit').attr('disabled', false);
                        $('#firstname_1').val(fname);
                        $('#lastname_1').val(DEPARTMENT);

                        $('#lastname_1, #firstname_1')
                        .css({
                            "color":"",
                            "border": "1px solid #63f200"
                        });
                    }
                    else{
                        $('#submit').attr('disabled', true);
                        $('#lastname_1, #firstname_1')
                        .val("")
                        .attr("placeholder", "Invalid Employee Number! 😡")
                        .css({
                            "color": "red",
                            "border": "1px solid red"
                        });
                    };
                  
            },

        });

        if ((e.keyCode === 9) || (e.keyCode === 13)) {

            var temp     = $("input[name='empid']").val();
            var empid = $.trim(temp);

            $.ajax({
                type: 'POST',
                url: './php/getDetails.php',
                data: {empid: empid, request: 3},
                cache : false,
                dataType: "json",
                success:function(response){
                    var len = response.length;

                    if (len > 0){
                        var fname =response[0]['fname'].toUpperCase();
                        var DEPARTMENT =response[0]['dept'].toUpperCase();

                        //PARSING DATA TO INPUTBOX
                        $('#submit').attr('disabled', false);
                        $('#firstname_1').val(fname);
                        $('#lastname_1').val(DEPARTMENT)
                        .css("text-align", "center");
                    }
                    else {
                        $('#submit').attr('disabled', true);
                        $('#lastname_1, #firstname_1')
                        .val("")
                        .attr("placeholder", "Invalid Employee Number! 😡")
                        .css({
                            "color": "red",
                            "border": "1px solid red"
                        });
                    };
                },
                   
            });
        }
        else {
            $('#submit').attr('disabled', true);
            $('#lastname_1, #firstname_1')
            .val("")
            .attr("placeholder", "Invalid Employee Number! 😡")
            .css({
                "color": "red",
                "border": "1px solid red"
            });
      
        };

    });

});
