
let currentTag = undefined;
let currentTagInput = undefined;
let tagsInForm;
let tagList;
let tagName;
let tagColor;
let addButton;
let colorPicker;

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
    let color = randomColors[Math.floor(Math.random() * randomColors.length)];
    tagColor.value = color; // Otherwise the color gets translated to rgb and we don't want rgb!
    currentTag.style.backgroundColor = tagColor.value;
    currentTag.innerText = tagName.value;
    currentTag.dataset.id = counter++;
    currentTagsMap[currentTag.dataset.id] = currentTag;
    tagList.appendChild(currentTag);
    currentTagInput.type = "hidden";
    currentTagInput.name =`tags[${currentTag.innerText}]`;
    currentTagInput.dataset.id = currentTag.dataset.id;
    currentTagInput.value = color;
    colorPicker.style.backgroundColor = color;
    currentRealTagsMap[currentTag.dataset.id] = currentTagInput;
    tagsInForm.append(currentTagInput);
    currentTag.onclick = (ev) => {
        ev = ev || window.event;
        let tag = ev.target || ev.srcElement;
        selectTag(tag);
    };

    currentTag.ondblclick = (ev) => {
        ev = ev || window.event;
        currentTag = ev.target || ev.srcElement;
        currentRealTagsMap[currentTag.dataset.id].remove();
        currentRealTagsMap[currentTag.dataset.id] = undefined;
        currentTagsMap[currentTag.dataset.id] = undefined;
        currentTag.remove();
        selectTag(currentTagsMap.firstChild);
    }
}

window.onload = function () {
    addButton = document.getElementById("addTag");
    tagColor = document.getElementById("tagColor");
    tagName = document.getElementById("tagName");
    tagList = document.getElementById("tagList");
    tagsInForm = document.getElementById("tagsInForm");
    colorPicker = document.getElementById("colorPicker");

    colorPicker.onclick = () => {
        tagColor.click();
    };

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

function selectTag(tag){
    currentTag = tag;
    tagName.value = currentTag.innerText;
    let cols = currentTag.style.backgroundColor.match(/(\d+)\,\ (\d+)\,\ (\d+)/g);
    tagColor.value = rgbToHex(cols[0], cols[1], cols[2]);
}

function onTagEdit(){
    currentTag.style.backgroundColor = tagColor.value;
    colorPicker.style.backgroundColor = tagColor.value;
    currentTag.innerText = tagName.value;
    currentRealTagsMap[currentTag.dataset.id].value = tagColor.value;
    currentRealTagsMap[currentTag.dataset.id].name = `tags[${tagName.value}]`;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

Element.prototype.remove = function(){
    this.parentElement.removeChild(this);
};