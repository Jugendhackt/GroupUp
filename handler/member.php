<?php
    require_once __DIR__ . '/../functions/members.php';

    $action = $_POST['action'];
    $userid = $_SESSION['uid'];
    $projectId = $_POST['projectId'];

    switch ($action){
        case "add":
            addMemberToProject($username, $projectId);
            break;
    }