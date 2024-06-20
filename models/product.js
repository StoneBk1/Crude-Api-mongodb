import { name } from 'ejs';
import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a name']
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        }

    }
)
const Product = mongoose.model('Product', productSchema);
export default Product;