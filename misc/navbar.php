<?php

    session_start();

?>

<!-- Navigation for main page, add page and search page -->
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="index.php">GroupUp</a>
    </div>
    <div class="uk-navbar-center">
        <div class="uk-navbar-item">
            <input type="text" class="uk-input" name="username" placeholder="Username" value="<?php echo $_SESSION['username'] ?>">
        </div>
    </div>
    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li><a href="add_project.php"><span class="uk-icon-button" uk-icon="icon: plus"></span></a></li>
            <li><a><span class="uk-icon-button" uk-icon="icon: search"></span></a></li>
        </ul>
    </div>

</nav>