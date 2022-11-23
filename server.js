import express from 'express'
import bodyParser from 'body-parser';
import { app } from './app.js'
import router from './app.js'
import cors from 'cors'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(express.json());
app.use(cors());

app.use("/api/v1", router)

const PORT = process.env.PORT || 5000;

app.listen( PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})
