import React from "react";

// Stytles
import "../styles/terminal.css";

// Components
import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

function Terminal() {

    return(
        <>

            <div className="terminal-container">

                <TerminalHeader />

                <TerminalBody />

            </div>

        </>
    );

}

export default Terminal;