const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})
connectDB()

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["https://superpower-archetype-frontend.vercel.app"],
    methods: ["GET", "POST", "OPTIONS"],
  }));

const userInfo = require('./routes/userInfo')
app.use('/users',userInfo)



const PORT = process.env.PORT || 5001

//Run app and wait for req at PORT = PORT
const server = app.listen(PORT,console.log('Server running in ',process.env.NODE_ENV,' mode on port ',PORT))

process.on(`unhandledRejection`,(err,promise)=>{
    console.log( `Error: ${err.message}`)
    server.close(()=>process.exit(1))
})