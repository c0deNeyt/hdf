



const content = document.querySelector('#sgst');


$(document).on("click", "#send",function(){

  if (content.value && content.value.length > 0 && content.value.trim().length > 0 ){ 

    var linalaman           = document.getElementById("sgst").value 

    event.preventDefault()
                Email.send({
                    Host: "smtp.gmail.com",
                    Username : "telford.mis.hdf.developer@gmail.com",
                    Password : "ofdtqxrgwapczvet",
                    To : "telford_mis_ph@astigp.com",
                    From : "telford.mis.hdf.developer@gmail.com",
                    Subject : "User HDF Suggestions and Feedback",
                    Body : "Hi HDF Dev. & MIS,"+
                    "<br/>" + "<br/>" +
                    "Kindly see details below."+
                    "<br/>" + "<br/>" +
                    "User Message: " + linalaman  +
                    "<br/>"+ "<br/>"+ "(Auto Generated Email)",

                })
    console.log("WORKING NAHH!!!");  

    const wrapper     = document.createElement('div');
    wrapper.innerHTML = "<span style='color: green; font-family: Arial, Helvetica, sans-serif;'>" +
                        "Your feedback has successfully sent @ telford_mis_ph@astigp.com" + "</span>";
        event.preventDefault()
        swal({
        title: "Thank You! Feedback sent",
        content:  wrapper,
        icon: "success",
        closeOnClickOutside: false,
        closeOnEsc: false,
        allowOutsideClick: false,
        buttons: {
         confirm: {
            text: "Done",
            value: true,
            visible: true,
            className: "",
            closeModal: true
          }, 
        },
        })
        .then(function(){
            window.location.href = "../";

        });
         

    }


  else { 

    event.preventDefault();
    swal({
    title: "Empty!",
    text: "Email Body cannot be empty.",
    icon: "warning",
    closeOnClickOutside: false,
    closeOnEsc: false,
    allowOutsideClick: false,
    buttons: {
     confirm: {
        text: "Try Again",
        value: true,
        visible: true,
        className: "",
        closeModal: true
      }, 
    },
    })    
 
  }
});