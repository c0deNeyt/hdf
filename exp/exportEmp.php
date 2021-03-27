<?php
include("../php/cnfg.php");
date_default_timezone_set('Asia/Singapore');

// //EMPLOYEE EXPORT CODE 

if(isset($_POST["export"])){

	$fileName = "Emp_HDF_Data-".date('hi:s A').".csv";
     
	  header('Content-Type: text/csv; charset=utf-8');  
	  header('Content-Disposition: attachment; filename='.$fileName);  
	  $output = fopen("php://output", "w");

	  // THIS CODE USED TO READ SPECIAL CHARACTER LIKE "Ñ"
	  fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF)); 

	  fputcsv($output, array('btemp', 'empid', 'fname', 'lname', 'time', 'date', 'symptoms', 'travelled', 'travloc'));  
	  $query = "SELECT * from hdf_tbl ORDER BY date DESC";  
	  $result = mysqli_query($con, $query);  
	  while($row = mysqli_fetch_assoc($result))  
	  {  
	       fputcsv($output, $row);  
	  }  
	  fclose($output); 

	exit(); 
}  

// VISITORS EXPORT CODE

if(isset($_POST["exportv"])){

	$fileName = "Visitors_HDF_Data-".date('hi:s A').".csv";
     
	  header('Content-Type: text/csv; charset=utf-8');  
	  header('Content-Disposition: attachment; filename='.$fileName);  
	  $output = fopen("php://output", "w");

	  // THIS CODE USED TO READ SPECIAL CHARACTER LIKE "Ñ"
	  fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF)); 

	  fputcsv($output, array('visitortype', 'btemp', 'fname', 'coname', 'contactnumber', 'Address', 'time', 'date', 'symptoms', 'travelled', 'travloc'));  
	  $query = "SELECT * from hdfv_tbl ORDER BY date DESC";  
	  $result = mysqli_query($con, $query);  
	  while($row = mysqli_fetch_assoc($result))  
	  {  
	       fputcsv($output, $row);  
	  }  
	  fclose($output); 

	exit(); 
}  


?>