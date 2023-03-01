import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from './config/connectDB';
import cors from 'cors';

require('dotenv').config();


let app = express();

app.use(cors({ origin: true }));

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //console.log(process.env.URL_REACT);
    //console.log(process);
    const allowedOrigins = [process.env.URL_REACT, 'http://titfin.com', 'https://titfin.com', "https://localhost:3000", "http://localhost:3000"];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();


let port = process.env.port || 9000;
app.listen(port, () => {
    //console.log(process.env.URL_REACT);
    console.log("Backend Nodejs is running on the port: " + port);
})
