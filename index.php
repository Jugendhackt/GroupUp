<?php

    require_once __DIR__ . '/functions/generic.php';
    $projects = getProjects();

?>

<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/uikit.min.css">
    <link rel="stylesheet" href="css/xtra-style.css">

    <title>GroupUp</title>

    <script>
        function openProject(id) {
            let all=document.getElementsByClassName('opened');
            [].forEach.call(all, function (element) {
                if (element.id !== "project_" + id){
                    element.classList.remove("opened");
                    element.classList.remove("uk-flex-first");
                }
            });
            let elem=document.getElementById("project_" + id);
            elem.classList.toggle("opened");
            elem.classList.toggle("uk-flex-first");
        }
    </script>

</head>
<body>

<?php require 'misc/navbar.php' ?>
<!-- Projects -->
<div class="uk-margin-large-left uk-margin-large-top uk-margin-large-right">
    <h2>Projects</h2>

    <div class="uk-flex uk-flex-wrap">

        <?php
            foreach ($projects as $project){
                $event = getEventById($project['eventId']);
                $tags = getTagsByProjectId($project['id']);
                echo <<<card
        <div id="project_{$project['id']}" class="uk-card uk-width-large uk-height-large" onclick="openProject({$project['id']})">
            <div class="uk-card-body">
                <h3 class="uk-card-title">{$project['name']}</h3>
                <p class="uk-text-muted">{$event['name']}</p>
                <p>{$project['description']}</p>
            </div>
            <div class="uk-card-footer">
card;
                foreach ($tags as $tag){
                    echo "<span class='uk-label uk-label-" . $tag['color'] . "'>" . $tag['value'] . "</span>&nbsp;";
                }
            echo <<<card
            </div>
        </div>
card;
            }
        ?>
    </div>
</div>

<!-- Scripts need to load at the end to imrpove loading time -->
<script src="js/uikit.min.js"></script>
<script src="js/uikit-icons.min.js"></script>

<?php
    require 'misc/footer.php';
?>
</body>
</html>