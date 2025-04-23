import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const password = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended : true }));



app.post("/check",(req,res) => {
    let check = (password === req.body["password"]) ? true : false;
    if (check){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.redirect("/") ;
    }
});

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.listen(port, (req,res) => {
    console.log("Listening on port",port)
});