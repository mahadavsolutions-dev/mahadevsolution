import Product from '../models/Product.js';
export const getProducts=async(req,res)=>{const {q,category,page=1,limit=12}=req.query; const filter={...(category&&{category}),...(q&&{name:{$regex:q,$options:'i'}})}; const items=await Product.find(filter).skip((page-1)*limit).limit(Number(limit)); const total=await Product.countDocuments(filter); res.json({items,total});};
export const getProduct=async(req,res)=>res.json(await Product.findById(req.params.id));
export const createProduct=async(req,res)=>res.status(201).json(await Product.create(req.body));
export const updateProduct=async(req,res)=>res.json(await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}));
export const deleteProduct=async(req,res)=>{await Product.findByIdAndDelete(req.params.id);res.json({ok:true});};
