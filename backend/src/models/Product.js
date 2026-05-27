import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  price: Number,
  image: String,
  stock: Number
}, { timestamps: true })

export default mongoose.model('Product', productSchema)
