import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({name:String,category:String,price:Number,stock:Number,brand:String,images:[String],specs:mongoose.Schema.Types.Mixed,rating:{type:Number,default:0},description:String},{timestamps:true});
export default mongoose.model('Product', productSchema);
