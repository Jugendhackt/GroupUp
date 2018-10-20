
let currentTag = undefined;
let currentTagInput = undefined;
let tagsInForm;
let tagList;
let tagName;
let tagColor;
let addButton;

let currentTagsMap = {};
let currentRealTagsMap = {};
let counter = 0;

const randomColors = ["#29abe1", "#5fdba4", "#5fdba4", "#f86d15", "#ffd400", "#1a1a1a"];

function addNewTag() {
    tagName.value = "Unnamed Tag";
    currentTag = document.createElement("SPAN");
    currentTagInput = document.createElement("INPUT");
    currentTag.classList.add("uk-label");
    currentTag.classList.add("tag");
    tagColor.value = randomColors[Math.floor(Math.random() * randomColors.length)];
    currentTag.style.backgroundColor = tagColor.value;
    currentTag.innerText = tagName.value;
    currentTag.dataset.id = counter++;
    currentTagsMap[currentTag.dataset.id] = currentTag;
    tagList.appendChild(currentTag);
    currentTagInput.type = "hidden";
    currentTagInput.name =`tags[${currentTag.innerText}]`;
    currentTagInput.dataset.id = currentTag.dataset.id;
    let cols = currentTag.style.backgroundColor;
    currentTagInput.value = rgbToHex(cols[0], cols[1], cols[2]);
    currentRealTagsMap[currentTag.dataset.id] = currentTagInput;
    tagsInForm.append(currentTagInput);
    currentTag.onclick = (ev) => {
        ev = ev || window.event;
        currentTag = ev.target || ev.srcElement;
        let cols = currentTag.style.backgroundColor.match(/(\d+)\,\ (\d+)\,\ (\d+)/g);
        tagColor.value = rgbToHex(cols[0], cols[1], cols[2]);
    };

    currentTag.ondblclick = (ev) => {
        ev = ev || window.event;
        currentTag = ev.target || ev.srcElement;


    }
}

window.onload = function () {
    addButton = document.getElementById("addTag");
    tagColor = document.getElementById("tagColor");
    tagName = document.getElementById("tagName");
    tagList = document.getElementById("tagList");
    tagsInForm = document.getElementById("tagsInForm");

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

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}