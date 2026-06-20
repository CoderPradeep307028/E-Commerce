const mongoose = require('mongoose')

const connectDb = async() => {
    try {
        const uri = process.env.MONGO_URI
        if (!uri) {
            throw new Error('MONGO_URI is not defined')
        }

        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected.')
        })

        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error:', error.message)
        })

        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB disconnected.')
        })

        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 10000,
            bufferCommands: false,
        })

        if (mongoose.connection.readyState !== 1) {
            throw new Error('Failed to establish MongoDB connection')
        }

        console.log('Database connected.')
        console.log("Ready State:", mongoose.connection.readyState)
    } catch (error) {
        console.error('Database connection error:', error.message)
        process.exit(1)
    }
}

module.exports = connectDb