<?php

//DATABASE CONNECTION
require("./config.php");
 // FOR AJAX REQUEST' S
$request = $_POST['request'];  


  //=========================================
 //  FOR AUTOCOMPLETE MACHINES SUGGESTIONS
//===========================================
if($request == 2){
    $empid = $_POST["empid"];
    $dataRequest = "SELECT *
                    FROM `emp_masterlist` 
                    WHERE `EMP_NO` = $empid ";
    $dataFromDatabase = $db->prepare($dataRequest);
    $dataFromDatabase -> execute();

    while($row = $dataFromDatabase->fetch(PDO::FETCH_ASSOC)){
        $userid = $row['EMP_NO'];
        $fname = $row['EMP_NAME'];
        $dept = $row['DEPARTMENT'];

        $data[] = array("id" => $userid,"fname" => $fname, "dept" =>$dept);
    }
    echo json_encode($data);
    exit;
};

?>
