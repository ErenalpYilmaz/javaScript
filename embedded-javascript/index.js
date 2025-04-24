import express from "express";

const app = express();
const port = 3000;
const btnName = "";
app.get("/",(req,res) => {
    const today = new Date();
    const day = today.getDay();

    let type = " a weekday";
    let adv = "it's time to work hard";
    let btnName = "Work";
    if (day === 0 || day === 6){
        type = "the weekend";
        adv = "it's time to have some fun";
        btnName = "FUNNNN";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv,
        btnName: btnName
    });
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
