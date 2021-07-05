<?php

require_once("./config.php");

if(isset($_POST)){
	$btemp 				= $_POST['btemp'];
	$empid 				= $_POST['empid'];
	$fname				= $_POST['fname'];
	$dept 				= $_POST['dept'];
	$time 				= $_POST['time'];
	$date				= $_POST['date'];
	$symptoms			= $_POST['symptoms'];
	$travelled			= $_POST['travelled'];
	$travloc			= $_POST['travloc'];
	$willing			= $_POST['willing'];
	$whyNo				= $_POST['whyNo'];
	$vacRegistered		= $_POST['vacRegistered'];
	$registrationLoc	= $_POST['registrationLoc'];
	$takedVac			= $_POST['takedVac'];
	$vacDate			= $_POST['vacDate'];
	$dosetype			= $_POST['dosetype'];
	$bakunatype			= $_POST['bakunatype'];
	$sql = "INSERT INTO `hdf_tbl` (`btemp`, `empid`, `fname`, `department`, `time`, `date`, `symptoms`, `travelled`, `travloc`, `willing`, `whyNo`, `vacRegistered`, `registrationLoc`, `vaccinated`, `vaccinationDate`, `dosetype`, `bakunatype`)
			VALUES
				(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	$stmtinsert = $db->prepare($sql);
	$result = $stmtinsert->execute([$btemp, $empid, $fname, $dept, $time, $date, $symptoms, $travelled, $travloc, $willing, $whyNo, $vacRegistered, $registrationLoc, $takedVac, $vacDate, $dosetype, $bakunatype ]);

	if ($result){
		echo "Insert Success!";
	};

}

?>
