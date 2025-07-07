import { ImageRepository, ProductRepository } from "Repositories";

export class ProductFramework {
    static _product(data) {
        return {
            id: data.id,
            title: data.name,
            price: data.price,
            description: data.description,
            images: data.images
        };
    }

    static async getProducts() {
        const allProducts = (await ProductRepository.getAllProducts());

        return allProducts.map(product => this._product(product));
    }

    static async getProduct(id) {
        const product = await ProductRepository.getProduct(id);

        return this._product(product);
    }
}