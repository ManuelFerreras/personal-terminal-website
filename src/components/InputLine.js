import React from "react";

import availableCommands from "../commands";

function InputLine() {
    const handleKeyDown = e => {
        if(e.key === 'Enter') {
            handleCommandEntered(document.querySelector("#input-commands").value);
            document.querySelector("#input-commands").value = "";
        }  else if (e.key === "Backspace" && document.querySelector("#input-commands").value[document.querySelector("#input-commands").value.length - 1] == '\u25ae') {
            document.querySelector("#input-commands").value = document.querySelector("#input-commands").value.slice(0, -1);
        }
        else {
            document.querySelector("#input-commands").value.replaceAll('\u25ae', '');
        }
    }

    function handleCommandEntered(command) {
        if (command != "" && command != '\u25ae') {
            var words = command.split(" ");
            if (words[0] in availableCommands) {
                if(words[1] != undefined && availableCommands[words[0]].includes(words[1])) {
                    console.log(words[1]);
                } else {
                    console.log("Command does not exists");
                }
            }             
        }
    }

    return(

        <>

            <div className="input-line">
                <p id="terminalInput"></p>
                <input id="input-commands" className="terminal-input" spellCheck="false" type="text" autoComplete="off" disabled onChange={(e) => {
                    e.target.value = e.target.value.replaceAll('\u25ae', '');
                }} onBlur={e => e.target.focus()} autoFocus onKeyDown={handleKeyDown} />
            </div>

        </>

    );

}

export default InputLine;