require('dotenv').config();
const express=require('express');
const app=express();
const port=4000;

app.get('/',(req,res) => {
    res.send('Hello World!');
})

app.get('/siddhi',(req,res) => {
    res.send('Hello siddhi!');
})

app.get('/shri',(req,res) => {
    res.send('Hello shri!');
})
app.listen(process.env.port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})