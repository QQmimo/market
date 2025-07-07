import { Description } from "UI";
import styles from "./Product.module.scss";

export function Product({ id, title, description, price, images, onAddCard, onShowMore, asView = false }) {
    const onClickAddCard = () => {
        onAddCard?.(id);
    }

    const onClickShowMore = () => {
        onShowMore?.(id);
    }

    if (asView) {
        return (
            <div className={styles.view}>
                <div className={styles.title}>{title}</div>
                <img className={styles.image} src={images[0]?.imageUrl} />
                <Description label={"Описание"}>
                    {description}
                </Description>
                <button onClick={onClickAddCard}>on card</button>
            </div>
        );
    }

    return (
        <div data-id={id} className={styles.product}>
            <img src={images[0]?.imageUrl} />
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>${price}</div>
            <Description label={"Действия"}>
                <button onClick={onClickShowMore}>show more</button>
                <button onClick={onClickAddCard}>on card</button>
            </Description>
        </div>
    );
}