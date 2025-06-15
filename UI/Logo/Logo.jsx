import logo from "Assets/logo.png";
import style from "./Logo.module.scss";

export function Logo() {
    return (
        <a href="./">
            <img src={logo} className={style.logo} />
            <span>Market</span>
        </a>
    );
}