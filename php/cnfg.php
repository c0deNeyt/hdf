<?php
$host = "127.0.0.1"; /* Host name */
$user = 'root'; /* User */
// $user = 'neyt'; /* User */
$password = 'gieRHAAA9iSi3ULZ'; /* Password */
// $password = 'dkoalam3h'; /* Password */
$dbname = "telford_db"; /* Database name */


$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
// if (!$con) {
//  die("Connection failed: " . mysqli_connect_error());
// }

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit;
}

// Change character set to utf8
mysqli_set_charset($con,"utf8");

?>
