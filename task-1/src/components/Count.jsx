import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

function Form({ startHandler, minutes }) {
    let [text, setText] = useState(minutes);
    let [disabled, setDisabled] = useState(false);

    let clickHandler = () => {
        startHandler(minutes);
    };

    useEffect(clickHandler, []);

    let minChangeHandler = (e) => {
        let v = e.target.value;
        setText(v);
        setDisabled(!(v > 0));
    };

    let Space = () => <div style={{ width: "15px" }}></div>;

    return (
        <Grid
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Typography>Countdown</Typography>
            <Space />
            <TextField
                label="minutes"
                variant="outlined"
                type="number"
                value={text}
                onChange={minChangeHandler}
            ></TextField>
            <Space />
            <Button onClick={clickHandler} disabled={disabled}>
                Start
            </Button>
        </Grid>
    );
}

export default Form;
