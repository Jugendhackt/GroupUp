let usernameInput;
let timeoutID;
let button;
let username;
let spinner;

let currentTest;

window.onload = () => {
    button = document.getElementById("usernameCheckButton");
    usernameInput = document.getElementById("usernameInput");
    spinner = document.getElementById("loadingSpinner");
    usernameInput.onkeyup = () => {
        button.classList.add("hidden");
        spinner.classList.add("hidden");
        clearTimeout(timeoutID);
        timeoutID = setTimeout(checkUsername, 2000);
    };
    button.onclick = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("post", "handler/username.php");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200){
                uikit.notification("Your username was set!");
            }
        };
        xhr.send("action=set&username=" + username);
    }
};

function checkUsername(){
    spinner.classList.remove("hidden");
    if(usernameInput.value){
        console.log("Checking if your username is taken...");
        username = usernameInput.value;
        let xhr = new XMLHttpRequest();
        xhr.open("post", "handler/username.php");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
                if(xhr.response === "false"){
                    button.classList.remove("hidden");
                    spinner.classList.add("hidden");
                } else {
                    UIkit.notification("Oh oh! It seems like this name is already taken!");
                    spinner.classList.add("hidden");
                    button.classList.remove("hidden");
                }
            }
        };
        currentTest = xhr;
        xhr.send("action=check&username=" + username);
    }
}