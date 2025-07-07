import { RequestApplication } from "Applications";


export class ProductRepository {
    static async getAllProducts() {
        return await RequestApplication.get('/api/products');
    }

    static async getProduct(id) {
        return RequestApplication.get(`/api/products/${id}`);
    }
}