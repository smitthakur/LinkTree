const express = require('express');
const app= express();
const cors= require('cors');
const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
const {registerUser, loginUser} =require('./controllers/auth');
require('dotenv').config();
const {dashData}=require('./controllers/dashData');

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/LinkTree-1').then(()=>{console.log('mongo db connected')}).catch(err=>{console.log(err.message)});

app.get('/', (request, response)=> {
    response.send(`server is running on port ${port}`);
})


app.post('/api/register', registerUser);

app.post('/api/login', loginUser);

app.post('/data/dashboard', dashData);

const port= process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})