import { Counter } from "UI";
import styles from "./ProductInCard.module.scss";

export function ProductInCard({ id, title, price, count, images, onCancel, onChange }) {
    const mainImage = (images.find(image => image.main) ?? images[0])?.imageUrl;

    const onClickCancel = () => {
        onCancel?.(id);
    }

    const onCountChange = (count) => {
        onChange?.({ id: id, count: count });
    }

    return (
        <tr className={styles.product}>
            <td>
                <button onClick={onClickCancel}>x</button>
            </td>
            <td>
                <img className={styles.image} src={mainImage} />
            </td>
            <td className={styles.title}>
                {title}
            </td>
            <td>
                <Counter value={count} onChange={onCountChange} />
            </td>
            <td>
                $ {price}
            </td>
        </tr>
    );
}