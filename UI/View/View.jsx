import { useEffect, useState } from "react";
import { ProductFramework } from "Frameworks";
import { Product } from "UI";

export function View({ show, onAddCard }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        ProductFramework.getProduct(show).then(product => {
            setProduct(product);
        });
    }, []);

    return (
        <div>
            {
                product !== null
                    ? <Product {...product} asView onAddCard={onAddCard} />
                    : null
            }
        </div>
    );
}