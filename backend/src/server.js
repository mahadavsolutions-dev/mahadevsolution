import express from 'express'; import cors from 'cors'; import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; import authRoutes from './routes/authRoutes.js'; import productRoutes from './routes/productRoutes.js'; import orderRoutes from './routes/orderRoutes.js';
dotenv.config(); const app=express(); app.use(cors({origin:process.env.CLIENT_URL})); app.use(express.json());
app.get('/api/health',(_,res)=>res.json({ok:true}));
app.use('/api/auth',authRoutes); app.use('/api/products',productRoutes); app.use('/api/orders',orderRoutes);
const port=process.env.PORT||5000; connectDB().then(()=>app.listen(port,()=>console.log(`API on ${port}`)));
