const express = require("express");
const app = express();
const ExpressError = require("./expressError"); // midleware 

// app.use((req, res, next) => {
//     // console.log("Heloo I am Root");
//     console.log("Time", Date.now());
//     res.send("middleware finished")
// });

// app.use((req, res, next) => {
//     // console.log("Heloo I am Root");
//     // console.log("Time", Date.now());
//     res.send("middleware finished")
//     next();
// });
// app.use((req, res, next) => {
//     console.log("Heloo I am second Root");
//     // console.log("Time", Date.now());
//     res.send("middleware finished")
//         // next();
//         // console.log("this is ");  exicute
//     return next();
//     // console.log("this is "); not exicute
// });

// path middleaware
app.use("/random", (req, res, next) => {
    console.log("Heloo I am random");
    // // console.log("Time", Date.now());
    // res.send("middleware finished")
    next();
});
// utility middleware
app.use((req, res, next) => {
    req.time = new Date(new Date()).toString;
    console.log(req.method, req.hostname, req.path, req.time());
    next();
});

// acccess in api
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveacccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED");
});


app.get("/api", (req, res) => {
    res.send("data");
});

// multiple middlewares

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveacccess") {
        next();
    }
    res.send("ACCESS DENIED");
};

// app.get("/wrong", (req, res) => {

// });

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("")
});


app.get("/random", (req, res) => {
    res.send("this is a rendom page");
});

app.get("/err", (req, res) => {

});
// error handling
app.use((err, req, res, next) => {
    let { status = 500, message = 'SOME_ERROR' } = err;
    res.status(status).send(message);
});

// custom error classes

// 404 not found
app.use((req, res) => {
    res.status(404).send("page is not found");
});

app.listen("8080", () => {
    console.log("");
});