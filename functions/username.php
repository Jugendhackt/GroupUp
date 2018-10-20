<?php

    require_once __DIR__ . "/../handler/db.php";
    session_start();

    function checkUsername(string $username){
        global $__DB;
        $sql = "SELECT * FROM users where name='" .mysqli_real_escape_string($__DB, $username) . "' LIMIT 1";
        $result = $__DB->query($sql);

        if ($result->num_rows > 0 ){
            return $result->fetch_assoc();
        }else{
            return false;
        }
    }

    function setUsername(string $username){
        global $__DB;

        if($result = checkUsername($username)){
            $_SESSION['uid'] = $result['id'];
            $_SESSION['username'] = $result['name'];
            return true;
        }else{
            $sql = "INSERT INTO users (name) values ('" . mysqli_real_escape_string($__DB, $username) . "')";
            $__DB->query($sql);
            $result = checkUsername($username);
            $_SESSION['uid'] = $result['id'];
            $_SESSION['username'] = $result['name'];
            return true;
        }
        return false;
    }

