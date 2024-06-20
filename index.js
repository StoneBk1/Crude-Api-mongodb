import express from 'express';
const app = express();
import mongoose from 'mongoose';
import product from './models/product.js';
import Product from './models/product.js';
import methodOverride from 'method-override';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(methodOverride('_method'));


app.get('/', async(req, res) => {
    const allProducts = await Product.find({});
   
    res.render('index.ejs', {allProducts});
})
app.post('/create', async(req, res) => {
    const newProduct = await product.create(req.body);
    // console.log(newProduct);
    res.redirect('/');
})
app.get('/create', (req, res) => {
  res.render('new.ejs');
})
app.get('/single-product/:id', async(req, res) => {
  const id = req.params.id;
  const findProduct = await Product.findById(id);
  // console.log(findProduct)
  res.render('show.ejs', {findProduct});
})
app.get('/single-product/:id/edit', async(req, res) => {
  const id = req.params.id;
  const findProduct = await Product.findById(id);
  // console.log(findProduct)
  res.render('edit.ejs', {findProduct});
})
app.put('/update/:id', async(req, res) => {
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
  }})
app.delete('/delete/:id', async(req, res) => {
    const id = req.params.id;
    const deleteproduct = await Product.findByIdAndDelete(id);
    console.log(deleteproduct);
    res.redirect('/');
})
mongoose.connect('mongodb://127.0.0.1:27017/Api')
  .then(() => console.log('Connected!'));
app.listen(3000, () => {
    console.log('server is running on port 3000');
})