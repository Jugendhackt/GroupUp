<?php

header("Location: index.php");

function is_cli()
{
    if( defined('STDIN') )
    {
        return true;
    }

    if( empty($_SERVER['REMOTE_ADDR']) and !isset($_SERVER['HTTP_USER_AGENT']) and count($_SERVER['argv']) > 0)
    {
        return true;
    }

    return false;
}

if(is_cli()){
    require_once __DIR__ . '/handler/db.php';
    global $__DB;
    $sql = file_get_contents(__DIR__ . '/db_struct.sql');
    echo $sql;
    $__DB->multi_query($sql);
}