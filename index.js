const express =require("express")
const cors = require("cors")
const dotenv =require("dotenv").config()
const connectDB = require("./database/dbfile.js")
const routes = require("./routes/userRoutes")





const app = express()

// Middlewares
app.use(express.json())

app.use(cors())



const PORT = process.env.PORT || 5000


// Function to connect to DB
connectDB()


app.listen(PORT, ()=>{
    console.log(`sever started running on ${PORT}`);
})

app.get("/", (req, res)=>{
    return res.status(200).json({message: "Welcome To Youthrive Sever"})

})

app.use("/api", routes)

app.use((req,res)=>{
    res.status(404).json({
        message: "sorry this endpoint does not exists."
    })
})

// Emmanuel