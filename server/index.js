import express from 'express';   
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app= express();

app.use(bodyParser.json({limit:"30mb", extended:true})); //limiting the size of the images
app.use(bodyParser.urlencoded({limit:"30mb", extended:true})); //limiting the size of the images
app.use(cors()); //to prevent cors errors

//setting up the routes
const CONNECTION_URL = 'mongodb+srv://khwahishVaid:9354541733Nisha@cluster0.ucwzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

//connecting to the server
mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));
