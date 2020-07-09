import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";

function paded(n) {
    let t = parseInt(n);
    return t >= 10 ? t : "0" + t;
}

function Time({ seconds }) {
    return (
        <Typography color="textPrimary" style={{ textAlign: "center", fontSize: '48px' }}>
            {paded(seconds / 60)}
            :
            {paded(seconds % 60)}
        </Typography>
    );
}

export default Time;
