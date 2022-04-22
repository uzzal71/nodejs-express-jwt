import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/userRoute";

const app = express();
const PORT = 4000;

// define routes
routes(app);

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});