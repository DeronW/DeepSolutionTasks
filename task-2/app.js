const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const Store = {
    dict: {
        sample: [
            { value: 1, time: new Date().getTime() },
            { value: 2, time: new Date().getTime() },
            { value: 3, time: new Date().getTime() },
        ],
        // some_key: [value1, value2, ...]
    },
    add: function (key, value) {
        if (isNaN(value)) return;

        let element = {
            value: Math.round(parseFloat(value)),
            time: new Date().getTime(),
        };

        if (this.dict[key]) {
            this.dict[key].push(element);
        } else {
            this.dict[key] = [element];
        }
    },
    sum: function (key) {
        let threshold = new Date().getTime() - 60 * 60 * 1000;
        if (this.dict[key]) {
            return this.dict[key].reduce((r, i) => {
                return i.time > threshold ? r + i.value : r;
            }, 0);
        } else {
            return null;
        }
    },
};

app.get("/ping", (req, res) => res.send("pong"));
app.get("/metric/:key/sum", (req, res) => {
    let value = Store.sum(req.params.key);
    res.json({ value });
});
app.post("/metric/:key", (req, res) => {
    Store.add(req.params.key, req.body.value);
    res.json({});
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
