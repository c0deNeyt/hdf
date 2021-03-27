<?php

require_once("../php/config.php");

if(isset($_POST)){

	$btemp 		= $_POST['btemp'];
	$empid 		= $_POST['empid'];
	$fname		= $_POST['fname'];
	$lname 		= $_POST['lname'];
	$time 		= $_POST['time'];
	$date		= $_POST['date'];
	$symptoms	= $_POST['symptoms'];
	$travelled	= $_POST['travelled'];
	$travloc	= $_POST['travloc'];



		$sql = "INSERT INTO hdf_tbl (btemp, empid, fname, lname, time, date, symptoms, travelled, travloc) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
		$stmtinsert = $db->prepare($sql);
		$result = $stmtinsert->execute([$btemp, $empid, $fname,$lname, $time, $date, $symptoms, $travelled, $travloc]);
		if($result){
			echo $fname.' '.$lname.' ';
			echo $time.' '.$date.' ';
		};
}else{


}

 



?>
