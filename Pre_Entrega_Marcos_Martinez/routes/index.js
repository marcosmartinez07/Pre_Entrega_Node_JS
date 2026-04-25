import express from 'express';
import {join, dirname} from 'path';
import { fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();

const app = express();
const PORT = 3000;

app.use(express.static(join(__dirname, 'public')));

app.get('/products', async function(req, res, next) {
  try {
   const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al buscar los productos');
  }
});

export default router;
