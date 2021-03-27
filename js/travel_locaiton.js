 jQuery(function ($){
            $('#travelledYes').change(function () 
                {
                $('input[visited="true"]').toggle(this.checked)
                $('label[visited="true"]').toggle(this.checked)
                $('div[visited="true"]').toggle(this.checked)
                $('input[visited="true"]').attr("required", true);
                document.querySelector("#travloc").value = '';

            })
                .change();//initialize with correct display state 
        });

        $('#travelledNo').change(function() {
            if($('#travelledNo').is(':checked')){
            $('input[visited="true"]').attr("required", false);
               $("input[visited='true']").hide();
               $("label[visited='true']").hide();
               $("div[visited='true']").hide();
               $("#travloc").val("");
            }else {
                
                $("#travloc").val("");
            }
        }).change();

        $("#travloc").keyup(function(){
        if ($(this).val().length == 0){
        		 
        	   $('div[visited="true"]').show();
            			
            }else{
            	
                $("div[visited='true']").hide();
            	
            }

        }).keyup();
        