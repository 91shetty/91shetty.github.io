<?php
    //get content of textfile
    $filename = "counter.txt";
    $content = file($filename);

    //put content in array
    $array = explode("||", $content[0]);
    $saidIt = $array[0];
    $heardIt = $array[1];
    echo json_encode(array($saidIt, $heardIt));
?>