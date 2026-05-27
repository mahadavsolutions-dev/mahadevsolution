import mongoose from 'mongoose'

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI
  if (!mongoUri) {
    console.warn('MONGODB_URI not set. Running without DB connection.')
    return
  }
  await mongoose.connect(mongoUri)
  console.log('MongoDB connected')
}
