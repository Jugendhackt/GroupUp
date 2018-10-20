
let currentTag = undefined;
let tagList;
let tagName;
let tagColor;
let addButton;

const randomColors = ["#29abe1", "#5fdba4", "#5fdba4", "#f86d15", "#ffd400", "#1a1a1a"];

function addNewTag() {
    tagName.value = "Unnamed Tag";
    currentTag = document.createElement("SPAN");
    currentTag.classList.add("uk-label");
    currentTag.classList.add("tag");
    tagColor.value = randomColors[Math.floor(Math.random() * randomColors.length)];
    currentTag.style.backgroundColor = tagColor.value;
    currentTag.innerText = tagName.value;
    tagList.appendChild(currentTag);
}

window.onload = function () {
    addButton = document.getElementById("addTag");
    tagColor = document.getElementById("tagColor");
    tagName = document.getElementById("tagName");
    tagList = document.getElementById("tagList");

    addButton.onclick = addNewTag;
    addNewTag();

    tagColor.onchange = onTagEdit;
    tagName.onkeyup = onTagEdit;
    tagName.onpaste = onTagEdit;
    document.getElementById("form").onsubmit = (e) => {
        if(document.activeElement === tagName){
            addNewTag();
            return false;
        }
    }
};

function onTagEdit(){
    currentTag.style.backgroundColor = tagColor.value;
    currentTag.innerText = tagName.value;
}