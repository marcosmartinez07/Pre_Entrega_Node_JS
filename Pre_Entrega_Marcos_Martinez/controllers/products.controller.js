import ProductsService from '../services/Products.services.js';

export async function getProducts(req, res) {
    try {
        const data = await ProductsService.fetchAll();
        console.log("Info productos" + data)   
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar los productos', message: error.message });
    }
}

export async function getProductById(req, res) {
    try {
        const { id } = req.params;
        console.log('ID recibido en el controlador:', id); 
        const product = await ProductsService.fetchById(id);
        res.json(product);
    } catch (error) {
        if (error.message === 'Producto no encontrado') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
}

export async function createProduct(req, res) {
    try {
        const newProduct = await ProductsService.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto', message: error.message });
    }
}

export async function deleteProduct(req, res) {
    try {
        const { id } = req.params;
        await ProductsService.remove(id);
        res.json({ message: `Producto con ID ${id} eliminado correctamente` });
    } catch (error) {
        if (error.message === 'Producto no encontrado') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
}