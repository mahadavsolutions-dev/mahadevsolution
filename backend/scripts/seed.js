import dotenv from 'dotenv'; dotenv.config();
import { connectDB } from '../src/config/db.js'; import Product from '../src/models/Product.js';
await connectDB(); await Product.deleteMany({});
await Product.insertMany([{name:'Kingston Fury 16GB DDR5',category:'RAM',price:79,stock:50,brand:'Kingston',images:['https://via.placeholder.com/400'],specs:{speed:'5600MHz'}},{name:'Samsung 990 Pro 1TB',category:'SSD',price:129,stock:40,brand:'Samsung',images:['https://via.placeholder.com/400'],specs:{type:'NVMe Gen4'}},{name:'RTX 4070 Super',category:'Graphics Cards',price:629,stock:12,brand:'NVIDIA',images:['https://via.placeholder.com/400'],specs:{vram:'12GB'}}]);
console.log('seeded'); process.exit(0);
