import React from "react";

import RedButton from "./RedButton";
import YellowButton from "./YellowButton";
import GreenButton from "./GreenButton";

function TerminalHeader() {
    return(
        <>

            <div className="terminal-header">

                <RedButton />

                <YellowButton />
                
                <GreenButton />

            </div>

        </>
    );
}

export default TerminalHeader;