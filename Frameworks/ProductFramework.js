import { ImageRepository, ProductRepository } from "Repositories";

export class ProductFramework {
    static _product(data) {
        return {
            id: data.id,
            title: data.title,
            price: data.price,
            imageUrl: ImageRepository.getImageUrl(data.title)
        };
    }

    static async getProducts() {
        const allProducts = (await ProductRepository.getAllProducts()).products;

        return allProducts.map(product => this._product(product));
    }

    static async getProduct(id) {
        const product = await ProductRepository.getProduct(id);

        return this._product(product);
    }
}