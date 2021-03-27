<?php
include "cnfg.php";

$request = $_POST['request'];   // request

// Get username list
if($request == 1){
    $search = $_POST['search'];

    $query = "SELECT * FROM emp_tbl WHERE empid like'%".$search."%' LIMIT 3" ;
    $result = mysqli_query($con,$query);
    
    while($row = mysqli_fetch_array($result) ){
        $response[] = array("value"=>$row['id'],"label"=>$row['empid']);
    }

    // encoding array to json format
    echo json_encode($response);
    exit;
}

// Get details
if($request == 2){
    $userid = $_POST['userid'];
    $sql = "SELECT * FROM emp_tbl WHERE id=".$userid;

    $result = mysqli_query($con,$sql);

    $users_arr = array();

    while( $row = mysqli_fetch_array($result) ){
        $userid = $row['id'];
        $fname = $row['fname'];
        $lname = $row['lname'];

        $users_arr[] = array("id" => $userid,"fname" => $fname, "lname" =>$lname);
    }

    // encoding array to json format
        echo json_encode($users_arr);
        exit;
}

if($request == 3){
    $empid = $_POST['empid'];
    $sql = "SELECT * FROM emp_tbl WHERE empid=".$empid;

    $result = mysqli_query($con,$sql);

    $users_arr = array();

    while( $row = mysqli_fetch_array($result) ){
        $empid = $row['empid'];
        $fname = $row['fname'];
        $lname = $row['lname'];

        $users_arr[] = array("empid" => $empid,"fname" => $fname, "lname" =>$lname);
    }

    // encoding array to json format
        echo json_encode($users_arr);
        exit;
}

else {
        echo "No Data Found in Database";
            $fname = "";
            $lname = "";
    }
?>
