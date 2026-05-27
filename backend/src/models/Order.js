import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},items:[{product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},qty:Number,price:Number}],amount:Number,status:{type:String,default:'placed'},trackingId:String,address:String,paymentId:String},{timestamps:true});
export default mongoose.model('Order', orderSchema);
