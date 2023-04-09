import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(cors())

// import routes
import productRoutes from "./routes/products.js"
import authRoutes from "./routes/auth.js"

// middleware
app.use(bodyParser.json())
app.use('/api/products', productRoutes)
app.use('/api/users', authRoutes)

// routes
app.get('/', (req, res) => {
    res.send("Hello World!")
})

// start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
