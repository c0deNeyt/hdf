
<?php

// $host = "localhost"; /* Host name */
// $user = "root"; /* User */
// $password = ""; /* Password */
// $dbname = "telford_db"; /* Database name */

// $con = mysqli_connect($host, $user, $password,$dbname);
// // Check connection
// if (!$con) {
//  die("Connection failed: " . mysqli_connect_error());
// }



$host = '127.0.0.1';
$db   = 'telford_db';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$options = [
    \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
    \PDO::ATTR_EMULATE_PREPARES   => false,
];
$db = "mysql:host=$host;dbname=$db;charset=$charset";
try {
     $db = new \PDO($db, $user, $pass, $options);
} catch (\PDOException $e) {
     throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

?>