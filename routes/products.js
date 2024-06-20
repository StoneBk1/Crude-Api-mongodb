import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();
import Product from '../models/product.js';
import { getAllProducts, getCreateForm, createproducts, getSingleProduct, editProduct, updateproduct, deleteProduct } from '../controllers/controller.js';

router.get('/', getAllProducts)

router.post('/create', createproducts)

router.get('/create', getCreateForm)

router.get('/single-product/:id', getSingleProduct)

router.get('/single-product/:id/edit', editProduct)

router.put('/update/:id', updateproduct);

router.delete('/delete/:id', deleteProduct)
export default router;