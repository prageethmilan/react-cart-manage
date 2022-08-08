import axios from "../axios";

class ProductService {
    fetchProducts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products')
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return resolve(err);
                })
        });
        return await promise;
    }
}

export default new ProductService();