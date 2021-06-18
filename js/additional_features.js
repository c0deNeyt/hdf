$(document).ready(function(){
    function datePicker(){
        $(".vacDate").datepicker();
    };
//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
    // TRAVEL TRACING 
//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
    // ** SCRIPT WHEN USERS CLICK YES OR
    // HE OR SHE TRAVELLED 
    $('#travelledYes').change(function (){
        var template = $(".optTemplate").html();
        $(".YesNo1").after(template);
        // ** SCRIPT FOR REQUIRING FIELD TRAVEL LOCATION
        $("#travloc").keyup(function(){
            var template = $(this).val();
            var notNull = $.trim(template);
            if (notNull){    
                $('div[visited="true"]').hide();
            }else{
                $('div[visited="true"]').show();
            }
        })
    });
    // ** SCRIPT WHEN USERS CLICK NO
    // OR DIDN'T TRAVEL AT ALL
    $('#travelledNo').change(function() {
        $(".OptInpt4TravelTracing").remove();
    });
//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
    // WILLING TO TAKE A VACCINE
//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
    // ** SCRIPT WHEN USER CLICK YES OR
    // WILLING TO TAKE A VACCINE
    $('#willingNo').change(function(){
        var template = $(".optTemplate2").html();
        $(".YesNo2").after(template);
         // ** SCRIPT FOR REQUIRING FIELD TO SPECIFY
         // WHY HE OR SHE DON'T WANT TO TAKE A VACCINE 
        $("#whyNo").keyup(function(){
            var template = $(this).val();
            var notNull = $.trim(template);
            if (notNull){
                $('div[vaccine="true"]').hide();      
            }else{
                $("div[vaccine='true']").show();   
            }
        });
    });
     // ** SCRIPT WHEN USER CLICK NO OR
    // WILLING TO TAKE A VACCINE
    $('#willingYes').change(function () {
        $('.optInpt4willingToVac').remove();
    });  
//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
    // MUNICIPALITY VACCINE INTAKE?
//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
    // ** SCRIPT WHEN USER CLICK YES OR
    // VACCINATED AT THEIR MUNICIPALITY
    $("#availVacYes").change(function(){
        var template = $(".optTemplate3").html();
        $(".YesNo3").after(template);
        // ** SCRIPT FOR REQUIRING FIELD WHERE YOU 
        // AVAIL OR TAKE THE VACCINE
        $("#regLoc").keyup(function(){
            var template = $(this).val();
            var notNull = $.trim(template);
            if (notNull){
                $('div[registered="true"]').hide();      
            }else{
                $('div[registered="true"]').show();   
            }
        });
    });
     // ** SCRIPT WHEN USER CLICK NO OR
    // NOT YET VACCINATED AT THEIR MUNICIPALITY
    $("#availVacNo").change(function () {
        $('.optInpt4RegLoc').remove();
    });
//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
    // VACCINATED QUESTIONS
//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
    // ** SCRIPT WHEN USER CLICK YES OR
    // HE OR SHE ALREADY TAKE A VACINE
    $("#vaccinatedYes").change(function(){
        var template = $(".optTemplate4").html();
        $(".YesNo4").after(template);
        datePicker();
        // ** SCRIPT FOR REQUIRING FIELD 
        // WHEN DID YOU TAKE THE VACCINE
        $(document).on("change keyup", "#vacDate", function(){
            var template = $(this).val();
            var notNull = $.trim(template);
            if (notNull){
                $('div[nabakunahan="true"]').hide();      
            }else{
                $('div[nabakunahan="true"]').show();   
            }
        });
    });
     // ** SCRIPT WHEN USER CLICK NO OR
    // NOT YET VACCINATED AT THEIR MUNICIPALITY
    $("#vaccinatedNo").change(function () {
        $('.vacinatedOpt').remove();
    });  
});// </END OF READY FUNCTION