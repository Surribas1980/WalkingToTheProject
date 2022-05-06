import React from "react";

function Component_ServicesId_Conversations({children,dato}){

    return(
    <div id="component-servicesId-conversations">
        <div>Component_ServicesId_Conversations</div>
        <div className="conversations">
                        {children}
        </div>
        <div className="send">
            {dato}
        </div>
    </div>)
}

export default Component_ServicesId_Conversations;