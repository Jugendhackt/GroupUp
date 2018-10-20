
let currentTag = undefined;
let tagList;
let tagName;
let tagColor;
let addButton;

window.onload = function () {
    addButton = document.getElementById("addTag");
    tagColor = document.getElementById("tagColor");
    tagName = document.getElementById("tagName");
    tagList = document.getElementById("tagList");

    addButton.onclick = () => {
        tagName.value = "Unnamed Tag";
        currentTag = document.createElement("SPAN");
        currentTag.classList.add("uk-label");
        currentTag.style.backgroundColor = tagColor.value;
        currentTag.innerText = tagName.value;
        tagList.appendChild(currentTag);
    };

    tagColor.onchange = onTagEdit;
    tagName.onkeyup = onTagEdit;
    tagName.onmouseup = onTagEdit;
};

function onTagEdit(){
    currentTag.style.backgroundColor = tagColor.value;
    currentTag.innerText = tagName.value;
}