import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";

function Tips({ seconds, minutes }) {
    let tips = " ";
    if (seconds < minutes * 30) tips = "More than half way there";
    if (seconds < 10 && seconds % 2) tips = " ";
    if (seconds == 0) tips = "Time's up!";

    let color = seconds < 20 ? "secondary" : "primary";

    return (
        <Typography
            color={color}
            style={{ height: "20px", textAlign: "center" }}
        >
            {tips}
        </Typography>
    );
}

export default Tips;
