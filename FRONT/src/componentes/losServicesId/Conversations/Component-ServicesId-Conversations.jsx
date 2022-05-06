import React from "react";
import GenericFormTextArea from "../../GenericFormTextArea";
import Component_ServicesId_Conversations_ColectiveConversationsId from "./ColectiveConversationsId/Component-ServicesId-Conversations-ColectiveConversationsId";

function Component_ServicesId_Conversations({children,dato}){

    return(
    <div id="component-servicesId-conversations">
        <div>Component_ServicesId_Conversations</div>
        <div className="conversations">
                        {children}
        </div>
        <div className="send">
            {/*<GenericFormTextArea idDivForm="generic-form-text-area"/>*/}
            {dato}
        </div>
    </div>)
}

export default Component_ServicesId_Conversations;