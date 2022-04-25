import React from "react";

// Components
import DefaultContent from "./DefaultContent";
import DynamicContent from "./DynamicContent";

function TerminalBody() {
    return(
        <>

            <div className="terminal-body">

                <div className="terminal-body-content">

                    <h1></h1>

                    <DefaultContent />

                    <DynamicContent />

                </div>
            
            </div>

        </>
    );
}

export default TerminalBody;