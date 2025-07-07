import { Logo } from "UI";
import style from "./Header.module.scss";

export function Header({ path, onChangePath }) {
    const onToggle = () => {
        onChangePath?.(path === 'home' ? 'card' : 'home');
    }

    return (
        <header className={style.header}>
            <Logo />
            {
                path === 'home'
                    ? <button onClick={onToggle}>go to cart</button>
                    : <button onClick={onToggle}>go to products</button>
            }
        </header>
    );
}