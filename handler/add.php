<?php

    require_once __DIR__ . "/../functions/projects.php";
    session_start();

    $name = $_POST['projectName'];
    $description = $_POST['projectDescription'];
    $hardware = $_POST['projectHardware'];
    $missing = $_POST['projectMissing'];
    $problems = $_POST['projectProblems'];
    $eventId = $_POST['projectEvent'];
    $tags = $_POST['tags'];

    addProject($name, $description, $hardware, $missing, $problems, $eventId, $tags);

    header("Location: ../index.php");