import { useState } from "react";
import { Header, Content, Footer, ProductList, Card, View } from "UI";

export function App() {
    const [productsInCard, setProductsInCard] = useState([]);
    const [path, setPath] = useState('home');
    const [viewId, setViewId] = useState(null);

    const onAddCard = (id) => {
        setProductsInCard(prevState => {
            const finded = prevState.find(x => x.id === id);
            if (!finded) {
                prevState.push({ id: id, count: 1 });
            } else {
                finded.count += 1;
            }
            return prevState;
        });
    }

    const onProductDelete = (id) => {
        setProductsInCard(prevState => {
            return prevState.filter(x => x.id !== id);
        });
    }

    const onShowMore = (id) => {
        setViewId(id);
        setPath('more');
    }

    const MAP = {
        home: <ProductList onAddCard={onAddCard} onShowMore={onShowMore} />,
        card: <Card onProductDelete={onProductDelete} products={productsInCard} />,
        more: <View show={viewId} onAddCard={onAddCard} />
    };

    return (
        <>
            <Header path={path} onChangePath={setPath} />
            <Content element={MAP[path]} />
            <Footer />
        </>
    );
}