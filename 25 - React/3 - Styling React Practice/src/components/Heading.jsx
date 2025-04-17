import React from "react";

function Heading() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let greeting = "";
    let emoji = "";
    let customStyle = {
        color: ""
    };

    if (currentHour < 12) {
        greeting = "Good Morning";
        emoji = "☀️";
        customStyle.color = "red"; 
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
        emoji = "🌤️";
        customStyle.color = "green";
    } else {
        greeting = "Good Evening";
        emoji = "🌙";
        customStyle.color = "blue";
    }

    return (
        <h1 className="heading" style={customStyle}>
            {greeting} {emoji}
        </h1>
    );
}

export default Heading;