import React from "react";
import icon_Notification from "../../../public/Icons/icon_Notification.svg"

function NotificationButton(){
    return (
        <button className="notificationButton"><img src={icon_Notification} alt="svg" /> </button>
    )
}

export default NotificationButton