import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import routes from "./src/routes/userRoute";

const app = express();
dotenv.config();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NodeJWT', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define routes
routes(app);

// default error handler
const errorHandler = (err, req, res, next) => {
    if (res.headersSend) {
        return next(err);
    }
    return res.status(500).json({
        "error": err
    });
};

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});