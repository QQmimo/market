import styles from "./Description.module.scss";

export function Description({ label, children }) {
    return (
        <fieldset className={styles.description}>
            {
                label
                    ? <legend className={styles.label}>{label}</legend>
                    : null
            }
            {children}
        </fieldset>
    );
}