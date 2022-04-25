import React from "react";

function DefaultContent() {
    return(
        <>
            <h2></h2>
            <p><span id="terminal-usage-text"></span><span className="underline" id="underline-one"></span><span id="orText"></span><span className="underline" id="underline-two"> </span><span id="dotText"></span></p>
            <p id="usageText"></p>
            <p className="double-indentation"><span className="yellow-color" id="openMetext"></span><span id="openMeinfo"></span></p>
            <p className="double-indentation"><span className="yellow-color" id="openExperiencetext"></span><span id="openExperienceinfo"></span></p>
            <p className="double-indentation"><span className="yellow-color" id="openRepotext"></span><span id="openRepoinfo"></span></p>
            <p className="double-indentation"><span className="yellow-color" id="openContactMetext"></span><span id="openContactMeinfo"></span></p>
        </>
    );
}

export default DefaultContent;