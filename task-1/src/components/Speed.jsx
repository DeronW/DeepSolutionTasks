import React, { useState, useEffect } from "react";

import { Typography, Grid } from "@material-ui/core";

import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

function Time({ speed, setSpeed }) {
    const sppedChangeHandler = (_, newSpeed) => {
        newSpeed && setSpeed(newSpeed);
    };

    return (
        <Grid
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <ToggleButtonGroup
                value={speed}
                exclusive
                onChange={sppedChangeHandler}
            >
                <ToggleButton value="1">1.0 &times;</ToggleButton>
                <ToggleButton value="1.5">1.5 &times;</ToggleButton>
                <ToggleButton value="2">2.0 &times;</ToggleButton>
                <ToggleButton value="1000">Max</ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    );
}

export default Time;
