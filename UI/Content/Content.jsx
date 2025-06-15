import { ProductList } from "UI";
import style from "./Content.module.scss";

export function Content() {
    return (
        <main className={style.content}>
            <ProductList />
        </main>
    );
}