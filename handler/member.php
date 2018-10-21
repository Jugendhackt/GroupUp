<?php
    require_once __DIR__ . '/../functions/members.php';

    $action = $_GET['action'];
    $userid = $_SESSION['uid'];
    $projectId = $_GET['projectId'];

    switch ($action){
        case "add":
            addMemberToProject($userid, $projectId);
            header("Location: ../index.php#" . $projectId);
            break;
    }