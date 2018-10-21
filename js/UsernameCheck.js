let usernameInput;
let timeoutID;
let button;
let username;

window.onload = () => {
    button = document.getElementById("usernameCheckButton");
    usernameInput = document.getElementById("usernameInput");
    usernameInput.onkeyup = () => {
        button.classList.add("hidden");
        console.log("Waiting 2000ms");
        clearTimeout(timeoutID);
        timeoutID = setTimeout(checkUsername, 2000);
    };
    button.onclick = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("post", "handler/username.php");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send("action=set&username=" + username);
    }
};

function checkUsername(){
    if(usernameInput.value){
        username = usernameInput.value;
        let xhr = new XMLHttpRequest();
        xhr.open("post", "handler/username.php");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
                if(xhr.response == "false"){
                    button.classList.remove("hidden");
                }
            }
        };
        xhr.send("action=check&username=" + username);
    }
}