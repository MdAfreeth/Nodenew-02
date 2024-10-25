import express from 'express';
import { getProducts, getProductsById,createProduct, updateProduct, deleteProduct } from '../Controller/ProductController.js';


const router = express.Router();
router.get("/getdata", getProducts);
router.get("/getdata:id",getProductsById);
router.post("/create", createProduct);
router.put("/update/:id",updateProduct);
router.delete("/delete/:id",deleteProduct)







export default router;