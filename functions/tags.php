<?php

    require_once __DIR__ . "/../handler/db.php";

    function checkTag(string $value, string $color){
        global $__DB;
        $sql = "SELECT * FROM tags where value='" . $__DB->real_escape_string($value) . "' and color='" . $__DB->real_escape_string($color) . "'";
        $result = $__DB->query($sql);

        if ($result->num_rows > 0 ){
            return $result->fetch_assoc();
        }else{
            return false;
        }
    }