import { RequestApplication } from "Applications";


export class ProductRepository {
    static async getAllProducts() {
        return RequestApplication.get(`https://dummyjson.com/products`);
    }

    static async getProduct(id) {
        return RequestApplication.get(`https://dummyjson.com/products/${id}`);
    }
}