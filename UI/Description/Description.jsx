import styles from "./Description.module.scss";

export function Description({ label, children }) {
    return (
        <div className={styles.description}>
            {
                label
                    ? <div className={styles.label}>{label}</div>
                    : null
            }
            {children}
        </div>
    );
}