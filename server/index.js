require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/authRoutes')
const connectDb = require('./config/db')
const cartRouter = require('./routes/cartRoutes')
const user = require('./models/user');
const app = express()
const port = process.env.PORT || 3000

const startServer = async () => {
  await connectDb()
  const users = await user.find();
  console.log(users);

  app.use(express.json())
  const allowedOrigins = process.env.ORIGIN ? process.env.ORIGIN.split(',') : ['http://localhost:5173', 'https://e-commerce-gamma-olive.vercel.app']

  const corsOptions = {
      origin: allowedOrigins,
      credentials: true,
      methods: ['GET','POST','PUT','DELETE','OPTIONS'],
      allowedHeaders: ['Content-Type','Authorization']
  }

  // Log incoming Origin for debugging deployed issues
  app.use((req, res, next) => {
    console.log('Incoming Origin:', req.headers.origin)
    next()
  })

  app.use(cors(corsOptions))
  app.options('*', cors(corsOptions))
  app.use(cookieParser())

  app.use("/api/auth",authRouter)
  app.use("/api/cart",cartRouter)

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({
      success: false,
      message: err.message || 'Internal server error'
    })
  })

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

startServer().catch((error) => {
  console.error('Failed to start server:', error.message)
  process.exit(1)
})