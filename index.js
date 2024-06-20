import express from 'express';
const app = express();
import mongoose from 'mongoose';
import product from './models/product.js';
import Product from './models/product.js';
import methodOverride from 'method-override';
import router from './routes/products.js';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use('/', router);




mongoose.connect('mongodb://127.0.0.1:27017/Api')
  .then(() => console.log('Connected!'));
app.listen(3000, () => {
    console.log('server is running on port 3000');
})