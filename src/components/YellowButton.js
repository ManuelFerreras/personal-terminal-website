import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function YellowButton() {
    return(
        <>

            <div className="usageButton yellow">
                <FontAwesomeIcon icon={faMinus} className="button-icon" />
            </div>

        </>
    );
}

export default YellowButton;