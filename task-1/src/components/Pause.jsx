import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

function Pause({ pause, setPause }) {
    let PlayBtn = (
        <Button onClick={() => setPause(false)}>
            <PlayCircleOutlineIcon />
        </Button>
    );

    let PauseBtn = (
        <Button onClick={() => setPause(true)}>
            <PauseCircleOutlineIcon />
        </Button>
    );

    return pause ? PlayBtn : PauseBtn;
}

export default Pause;
