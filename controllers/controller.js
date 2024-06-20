import mongoose from 'mongoose';
import express from 'express';
import Product from '../models/product.js';

// get all products
export  const getAllProducts = async(req, res) => {
    const allProducts = await Product.find({});
   
    res.render('index.ejs', {allProducts});
}

// Post .. create a product
 export const createproducts = async(req, res) => {
    const newProduct = await Product.create(req.body);
    // console.log(newProduct);
    res.redirect('/');
}
 export const getCreateForm = (req, res) => {
    res.render('new.ejs');
  }
 export const getSingleProduct = async(req, res) => {
    const id = req.params.id;
    const findProduct = await Product.findById(id);
    // console.log(findProduct)
    res.render('show.ejs', {findProduct});
  }
 export const editProduct = async(req, res) => {
    const id = req.params.id;
    const findProduct = await Product.findById(id);
    // console.log(findProduct)
    res.render('edit.ejs', {findProduct});
  }
  export const updateproduct = async(req, res) => {
    const id = req.params.id;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
      });
      // console.log('updated:', updatedProduct)
      res.redirect('/');
    }
     catch (error) {
      console.error('Error updating product:', error);
      res.status(500).send('Internal Server Error');
    }}

export const deleteProduct = async(req, res) => {
    const id = req.params.id;
    const deleteproduct = await Product.findByIdAndDelete(id);
    console.log(deleteproduct);
    res.redirect('/');
}