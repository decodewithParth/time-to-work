const express=require('express')
const app=express();

app.get("/",(req,res)=>{
    res.send("this is home page.");
});

app.get("/user",(req,res)=>{
    res.send("this is user page");
});

app.listen(3333,()=>{
    console.log(`Port is running on 3333`);
});