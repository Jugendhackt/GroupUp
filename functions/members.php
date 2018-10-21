<?php

    require_once __DIR__ . "/../handler/db.php";

    function getProjectMembers(int $projectId){
        global $__DB;

        $sql = "select * from member left join users on member.userId = users.id where member.projectId='$projectId'";
        $result = $__DB->query($sql);
        $members = array();

        while ($row = $result->fetch_assoc()){
            array_push($members, $row);
        }

        return $members;
    }

    function addMemberToProject(int $memberid, int $projectId){
        global $__DB;

        $sql = "insert into member values (" . $projectId . ", " . $memberid . ")";
        if(!checkMember($memberid, $projectId)){
            $result = $__DB->query($sql);
        }

        return $result;
    }

    function checkMember(int $memberId, int $projectId){
        global $__DB;
        $sql = "SELECT * FROM member where projectId='" . $__DB->mysqli_real_escape_string($projectId) . "' and userId='" . $__DB->real_escape_string($memberId) ."' LIMIT 1";
        $result = $__DB->query($sql);

        if ($result->num_rows > 0 ){
            return true;
        }else{
            return false;
        }
    }