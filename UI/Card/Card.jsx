import { useEffect, useState } from "react";
import { ProductInCard } from "UI";
import { ProductFramework } from "Frameworks";
import styles from "./Card.module.scss";

export function Card({ products, onProductDelete }) {
    const [saleProducts, setSaleProducts] = useState([]);

    useEffect(() => {
        const all = [];

        products.forEach(product => {
            all.push(ProductFramework.getProduct(product.id));
        });

        Promise.all(all).then(responseProducts => {
            setSaleProducts(responseProducts.map(responseProduct => {
                const productData = products.find(x => x.id === responseProduct.id)

                return { ...responseProduct, count: productData.count }
            }));
        });
    }, []);

    const onProductCancel = (id) => {
        setSaleProducts(prevState => prevState.filter(product => product.id !== id));
        onProductDelete?.(id);
    }

    const onProductChangeCount = ({ id, count }) => {
        setSaleProducts(prevState => {
            const products = [...prevState];
            const finded = products.find(product => product.id === id);
            if (finded) {
                finded.count = count;
            }
            return products;
        });
    }

    return (
        <table className={styles.card}>
            <tbody>
                {
                    (saleProducts ?? []).map(product => <ProductInCard key={product.id} {...product} onCancel={onProductCancel} onChange={onProductChangeCount} />)
                }
            </tbody>
        </table>
    );
}