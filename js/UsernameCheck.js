let usernameInput;
let timeoutID;
let button;
let username;
let spinner;

let currentTest;
let accept = false;

window.onload = () => {
    button = document.getElementById("usernameCheckButton");
    usernameInput = document.getElementById("usernameInput");
    spinner = document.getElementById("loadingSpinner");
    usernameInput.onkeyup = () => {
        button.classList.add("hidden");
        spinner.classList.add("hidden");
        accept = false;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(checkUsername, 2000);
    };

    usernameInput.onenter = () => {
        button.click();
    };
    button.onclick = () => {
        if(!accept)
            return;
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
    if(usernameInput.value){
        spinner.classList.remove("hidden");
        console.log("Checking if your username is taken...");
        username = usernameInput.value;
        let xhr = new XMLHttpRequest();
        xhr.open("post", "handler/username.php");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
                if(xhr.response === "true"){
                    UIkit.notification("Oh oh! It seems like this name is already taken!");
                }
                button.classList.remove("hidden");
                spinner.classList.add("hidden");
                accept = true;
            }
        };
        currentTest = xhr;
        xhr.send("action=check&username=" + username);
    }
}