<?php


require_once("../php/config.php");

if(isset($_POST)){

	$visitortype	= $_POST['visitortype'];
	$btemp 			= $_POST['btemp'];
	$fname			= $_POST['fname'];
	$coname 		= $_POST['coname'];
	$contactnumber 	= $_POST['contactnumber'];
	$address 		= $_POST['address'];
	$time 			= $_POST['time'];
	$date			= $_POST['date'];
	$symptoms		= $_POST['symptoms'];
	$travelled		= $_POST['travelled'];
	$travloc		= $_POST['travloc'];
	
	$sql = "INSERT INTO `hdfv_tbl`(`visitortype`, `btemp`, `fname`, `coname`, `contactnumber`, `Address`, `time`, `date`, `symptoms`, `travelled`, `travloc`)
	VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	$stmtinsert = $db->prepare($sql);
	$result = $stmtinsert->execute([$visitortype, $btemp, $fname, $coname, $contactnumber, $address, $time, $date, $symptoms, $travelled, $travloc]);
	if($result){
		echo "Insert Success!";
	};
}
?>
