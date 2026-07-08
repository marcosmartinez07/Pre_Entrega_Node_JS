import * as ProductModel from '../models/products.models.js';

class ProductsService {
    async fetchAll() {
        return await ProductModel.getAllProducts();
    }

    async fetchById(id) {
        const product = await ProductModel.getProductById(id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }

    async create(rawData) {
        // Validación básica de negocio
        if (!rawData.Nombre || rawData.Precio <= 0) {
            throw new Error('Datos de producto inválidos o precio menor/igual a cero');
        }

        const cleanProduct = {
            Nombre: rawData.Nombre,
            Descripcion: rawData.Descripcion || '',
            Precio: parseFloat(rawData.Precio),
            categoria: rawData.categoria || 'sin-categoria'
        };

        return await ProductModel.addProduct(cleanProduct);
    }

    async remove(id) {
        await this.fetchById(id); 
        return await ProductModel.deleteProduct(id);
    }
}

export default new ProductsService();