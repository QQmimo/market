import { useEffect, useState } from "react";
import styles from "./Counter.module.scss";

export function Counter({ value, onChange, min = 1 }) {
    const [count, setCount] = useState(value);

    const onMinus = () => {
        setCount(prevState => {
            if (prevState > min) {
                return prevState - 1;
            }
            return prevState;
        });
    }

    const onPlus = () => {
        setCount(prevState => prevState + 1);
    }

    useEffect(() => {
        onChange?.(count);
    }, [count]);

    return (
        <div className={styles.counter}>
            <button className={styles.button} onClick={onMinus}>-</button>
            <input className={styles.input} type={"number"} value={count} readOnly />
            <button className={styles.button} onClick={onPlus}>+</button>
        </div>
    );
}