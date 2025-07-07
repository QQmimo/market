import logo from "Assets/logo.png";
import style from "./Logo.module.scss";

export function Logo() {
    return (
        <div className={style.logo}>
            <img src={logo} className={style.logo} />
            <div className={style.title}>Market</div>
        </div>
    );
}