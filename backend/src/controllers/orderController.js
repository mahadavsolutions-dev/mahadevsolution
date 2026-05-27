import Order from '../models/Order.js';
export const createOrder=async(req,res)=>{const trackingId=`TRK-${Date.now()}`; const order=await Order.create({...req.body,user:req.user.id,trackingId}); res.status(201).json(order);};
export const myOrders=async(req,res)=>res.json(await Order.find({user:req.user.id}).populate('items.product'));
export const trackOrder=async(req,res)=>res.json(await Order.findOne({trackingId:req.params.trackingId}));
