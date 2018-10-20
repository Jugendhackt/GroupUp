<?php

    require_once __DIR__ . '/../functions/username.php';

    $action = $_POST['action'];
    $username = $_POST['username'];

    switch ($action){
        case "check":
            if(checkUsername($username)){
                echo 'true';
            }else{
                echo 'false';
            }
            break;
        case "set":
            setUsername($username);
            break;
    }