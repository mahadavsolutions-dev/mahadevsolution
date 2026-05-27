import { Router } from 'express'; import { auth } from '../middleware/auth.js'; import { createOrder,myOrders,trackOrder } from '../controllers/orderController.js';
const r=Router(); r.post('/',auth,createOrder); r.get('/mine',auth,myOrders); r.get('/track/:trackingId',trackOrder); export default r;
