const express = require('express');
const app= express();

app.get('/', (request, response)=> {
    response.send(`server is running on port ${port}`);
})

const port= process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})