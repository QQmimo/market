import { useEffect, useState } from "react";
import { ProductFramework } from "Frameworks";
import { Product } from "UI";
import style from "./ProductList.module.scss";

export function ProductList({ onAddCard, onShowMore }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductFramework.getProducts().then(products => {
            setProducts(products);
        });
    }, []);

    return (
        <div className={style.list}>
            {
                products.map(product => <Product
                    key={product.id}
                    onAddCard={onAddCard}
                    onShowMore={onShowMore}
                    {...product}
                />)
            }
        </div>
    );
}