import style from "./Product.module.scss";

export function Product({ id, title, price, imageUrl }) {
    return (
        <div className={style.product}>
            <img src={imageUrl} />
            <div className={style.title}>{title}</div>
            <div>{price}</div>
        </div>
    );
}