import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

import Count from "./components/Count";
import Tips from "./components/Tips";
import Time from "./components/Time";
import Pause from "./components/Pause";
import Speed from "./components/Speed";

function App() {
    let [seconds, setSeconds] = useState(-1);
    let [speed, setSpeed] = useState("1");
    let [pause, setPause] = useState(false);
    let [minutes, setMinutes] = useState(1);

    useEffect(() => {
        // console.log(!pause, seconds > 0, seconds - 1);
        let timer = setTimeout(() => {
            // console.log(222,timer, speed)
            if (!pause) {
                if (seconds > 0) setSeconds(seconds - 1);
            }
        }, 1000 / parseFloat(speed));

        return () => {
            clearInterval(timer);
        };
    });

    let startHandler = (m) => {
        setMinutes(m);
        setSeconds(m * 60);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Card>
                <CardContent>
                    <Count startHandler={startHandler} minutes={minutes} />
                </CardContent>

                <CardContent>
                    <Tips minutes={minutes} seconds={seconds} />
                </CardContent>

                <CardContent>
                    <Grid
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Time seconds={seconds} />
                        <Pause pause={pause} setPause={setPause} />
                    </Grid>
                </CardContent>
                <CardContent>
                    <Speed speed={speed} setSpeed={setSpeed} />
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
