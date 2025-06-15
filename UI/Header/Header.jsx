import { Logo } from "UI";
import style from "./Header.module.scss";

export function Header() {
    return (
        <header className={style.header}>
            <Logo />
        </header>
    );
}