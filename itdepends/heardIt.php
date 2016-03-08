<?php
    //get content of textfile
    $filename = "counter.txt";
    $content = file($filename);

    //put content in array
    $array = explode("||", $content[0]);
    $saidIt = $array[0];
    $heardIt = $array[1];
    $heardIt++;
    $insertCounter = $saidIt."||".$heardIt;
    $fp = fopen($filename,"w");
    fputs($fp,$insertCounter);
    fclose($fp);
    echo "Success";
?>