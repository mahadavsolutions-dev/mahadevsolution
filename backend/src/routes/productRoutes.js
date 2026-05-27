import { Router } from 'express'; import { auth, adminOnly } from '../middleware/auth.js'; import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
const r=Router();
r.get('/',getProducts); r.get('/:id',getProduct); r.post('/',auth,adminOnly,createProduct); r.put('/:id',auth,adminOnly,updateProduct); r.delete('/:id',auth,adminOnly,deleteProduct);
export default r;
