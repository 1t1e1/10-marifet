var express = require("express");
var cors = require("cors");
var app = express();
import data from "./data";

app.use(cors());

app.get("/:id", function(req, res, next) {
    const result = data.find(el => el.id == req.params.id);
    if (result === undefined) {
        res.json({ response: "this is undefined" });
    } else {
        res.json({ response: result });
    }
});

app.listen(3000, function() {
    console.log("CORS-enabled web server listening on port 3000");
});
