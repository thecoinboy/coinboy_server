import express from 'express'
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser';
import cors from 'cors'
export const app = express();
const router = express.Router();
dotenv.config({ path: "./config/config.env" })


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.json())
app.use(cors())


router.get("/check", (req, res) =>{
    res.send("working fine")
})

router.post("/contact", (req, res) => {
    const { name, email, subject, message } = req.body
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })
    const mailOption = {
        from: email,
        to: process.env.EMAIL,
        text:`Subject : ${subject}, Name : ${name}, E-mail : ${email}, Message : ${message}`,
    }

    if (!name || !email || !message) {
        res.status(400).json({
            message: "Please enter mandate fields"
        })
    } else {
        transporter.sendMail(mailOption, ((err) => {
            if (err) {
                res.status(500).json({ err: err })
            } else {
                res.status(200).json({ message: "Message sent successfully" })
            }
        }))
    }

})

export default router;

// netmptzvhusoyksb  pass;


