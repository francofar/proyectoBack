import express from 'express';
import { products } from './products.js';;

const app = express();

app.use(express.json());

app.get('/products', (req, res) => { 
    res.json(products);
});

const PORT = 8080;

app.listen(PORT, ()=>console.log(`Server ok on port ${PORT}`))