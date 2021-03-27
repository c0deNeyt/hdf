/* =============================================================================
#KAPAG ANG ORAS AY TUMATAKBO at ang araw, taon ay lumilipas dito lamang po hehe
================================================================================ */
function bigyan_mo_ng_oras_ang_sarili() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    var prnDt = new Date().toLocaleDateString('en-us', options);

    var x1 =  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
    document.getElementById("time").value = x1;
    document.getElementById("date").value = prnDt;
    iniwankaparin();

     }
    
 function iniwankaparin(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('bigyan_mo_ng_oras_ang_sarili()',refresh)
    }
    iniwankaparin();


