import { type } from "@testing-library/user-event/dist/type";

var messagesArray = ["Manuel Ferreras", "This is my Portfolio. A MacOS Inspired Terminal.", "To use this Terminal, you can Either ", "Use the Navigation", " or ", "Use the Terminal", ".", "Usage:", "'open aboutMe'", ": Opens About Me", "'open experience'", ": Opens My Entire Work Experience", "'open repo'", ": Opens my Github Repos", "'open contactMe'", ": Executes Contact Me Program"];
var ids = ["h1", "h2", "#terminal-usage-text", "#underline-one", "#orText", "#underline-two", "#dotText", "#usageText", "#openMetext", "#openMeinfo", "#openExperiencetext", "#openExperienceinfo", "#openRepotext", "#openRepoinfo", "#openContactMetext", "#openContactMeinfo"]

var inputText = "guest@ManuelFerreras:~$";
var textPosition = 0;
var wordcount = 0;
var speed = 10;
var toggle = false;

const typewriter = () => {
    document.querySelector(ids[wordcount]).innerHTML = document.querySelector(ids[wordcount]).innerHTML.slice(0, -1);
    document.querySelector(ids[wordcount]).innerHTML = document.querySelector(ids[wordcount]).innerHTML.substring() + messagesArray[wordcount].substring(textPosition - 1, textPosition) + "\u25ae";

    if(textPosition++ != messagesArray[wordcount].length) {
        setTimeout(typewriter, speed);
    } else {
        document.querySelector(ids[wordcount]).innerHTML = messagesArray[wordcount].substring(0, textPosition);
        textPosition = 0;
        if(wordcount + 1 != messagesArray.length) {
            wordcount += 1;
            setTimeout(typewriter, speed * 20);
        } else {
            activateInput();
        }
    }
}

const activateInput = () => {
    document.querySelector("#terminalInput").innerHTML = document.querySelector("#terminalInput").innerHTML.slice(0, - 1);
    document.querySelector("#terminalInput").innerHTML = document.querySelector("#terminalInput").innerHTML.substring() + inputText.substring(textPosition - 1, textPosition) + "\u25ae";

    if(textPosition++ != messagesArray[ids.length - 1].length) {
        setTimeout(activateInput, speed);
    }  else {
        document.querySelector("#terminalInput").innerHTML = document.querySelector("#terminalInput").innerHTML.slice(0, - 1);
        document.querySelector("#input-commands").disabled = false;
        document.querySelector("#input-commands").focus();
        startToggler();
    }
}

function startToggler() {
    var elem = document.querySelector("#input-commands");

    if (toggle) {
        elem.value += "\u25ae";
        toggle = false;
    } else {
        elem.value = elem.value.replaceAll('\u25ae', '');
        toggle = true;
    }

    setTimeout(startToggler, 500);
}

window.addEventListener("load", typewriter);