<?php

    require_once __DIR__ . '/../handler/db.php';

    function getProjects(){
        global $__DB;
        $sql = "SELECT * FROM projects";
        $result = $__DB->query($sql);
        $projects = array();
        while ($row = $result->fetch_assoc()){
            array_push($projects, $row);
        }

        return $projects;
    }

    function getEvents(){
        global $__DB;
        $sql = "SELECT * FROM events";
        $result = $__DB->query($sql);
        $events = array();
        while ($row = $result->fetch_assoc()) {
            array_push($events, $row);
        }

        return $events;
    }

    function getUsers(){
        global $__DB;
        $sql = "SELECT * FROM users";
        $result = $__DB->query($sql);
        $users = array();
        while ($row = $result->fetch_assoc()) {
            array_push($users, $row);
        }

        return $users;
    }

    function getCommentsByProjectId(int $projectId){
        global $__DB;
        $sql = "SELECT * FROM comments where projectId='$projectId'";
        $resullt = $__DB->query($sql);
        $comments = array();
        while ($row = $resullt->fetch_assoc()){
            array_push($comments, $row);
        }

        return $comments;
    }

    function getTagsByProjectId(int $projectId)
    {
        global $__DB;
        $sql = "select * from tagged left join tags on tagged.tagId = tags.id where tagged.projectId='$projectId'";
        $resullt = $__DB->query($sql);
        $tags = array();
        while ($row = $resullt->fetch_assoc()) {
            array_push($tags, $row);
        }

        return $tags;
    }

    function getEventById(int $eventId){
        global $__DB;
        $sql = "SELECT * FROM events where id='$eventId'";
        $result = $__DB->query($sql);
        return $result->fetch_assoc();
    }