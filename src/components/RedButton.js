import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function RedButton() {
    return(
        <>

            <div className="usageButton red" >
                <FontAwesomeIcon icon={faXmark} className="button-icon" />
            </div>

        </>
    );
}

export default RedButton;