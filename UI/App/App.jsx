import { ProductFramework } from "Frameworks";
import { Header, Content, Footer } from "UI";

export function App() {
    ProductFramework.getProducts().then(data => {
        console.log(data);
    });

    ProductFramework.getProduct(10).then(data => {
        console.log(data);
    });

    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
}