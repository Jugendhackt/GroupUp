<?php

    require_once __DIR__ . "/functions/generic.php";
    $events = getEvents();

?><html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/uikit.min.css">
    <link rel="stylesheet" href="css/xtra-style.css">

    <title>GroupUp</title>
</head>
<body>
<!-- Navigation for main page, add page and search page -->
<?php require 'misc/navbar.php' ?>
<div class="uk-container uk-margin-top">
<form>
    <!-- Project Name -->
    <label for="projectName" style="font-size: 2em">Project Name</label>
    <input type="text" class="uk-input uk-form-large" name="projectName" id="projectName" maxlength="32">

    <!-- Event Selectino -->
    <!-- TODO: Make it possible to add more events (over admin dashboard?) -->
    <label for="projectEvent">Event</label>
    <select name="projectEvent" id="projectEvent" class="uk-select">
        <?php
            foreach ($events as $event){
                echo "<option value='" . $event['id'] . "'>" . $event['name'] . "</option>";
            }
        ?>
    </select>

    <div class="uk-child-width-1-2@m uk-child-width-1-1@s" uk-grid>
        <div class="uk-card-body">
            <!-- Project Description -->
            <label for="projectDescription">Description</label>
            <textarea class="uk-textarea uk-height-medium" maxlength="300" name="projectDescription" id="projectDescription"></textarea>
        </div>
        <div class="uk-card-body">
            <!-- Project Problems / Questions -->
            <label for="projectProblems" >Problems</label>
            <textarea class="uk-textarea uk-height-medium uk-margin-remove-right" maxlength="300" name="projectDescription" id="projectProblems"></textarea>
        </div>
    </div>

    <div class="uk-child-width-1-2@m uk-child-width-1-1@s" uk-grid>
        <div class="uk-card-body">
            <!-- Project used Hardware -->
            <label for="projectHardware">Software / Technical Equipment</label>
            <textarea class="uk-textarea uk-height-medium" maxlength="300" name="projectHardware" id="projectHardware"></textarea>
        </div>
        <!-- Project Missing -->
        <div class="uk-card-body">
            <label for="projectMissing">What is missing</label>
            <textarea class="uk-textarea uk-height-medium" maxlength="300" name="projectMissing" id="projectMissing"></textarea>
        </div>
    </div>

    <!-- Project Tags
    Load the Javascript before because otherwise the tags wouldn't work -->
    <script src="js/tag-creator.js"></script>
    <h2>Tags</h2>
    <label for="tagName">Tag Name:</label>
    <input type="text" id="tagName" class="uk-input uk-width-1-5@m uk-width-1-1@s">
    <input type="color" id="tagColor" class="uk-button">
    <div id="tagList">
        <span class="uk-child-width-1-1@s uk-child-width-auto@m">
               <span class="uk-label tag">Tag A</span>
               <span class="uk-label tag">Tag B</span>
               <span class="uk-label tag">Tag C</span>
               <span class="uk-label tag">Tag D</span>
               <span class="uk-label tag">Tag E</span>
               <span class="uk-label tag">Tag F</span>
               <span class="uk-label tag">Tag G <button type="button" style="color: white" uk-close></button></span>
        </span>
        <span id="addTag" class="uk-icon-button" uk-icon="icon: plus"></span>
    </div>

    <button type="submit" class="uk-button uk-width-1-1 uk-margin-small-bottom uk-margin-medium-top">Add Project</button>
</form>
</div>
<!-- Scripts need to load at the end to improve loading time -->
<script src="js/uikit.min.js"></script>
<script src="js/uikit-icons.min.js"></script>
</body>
</html>*