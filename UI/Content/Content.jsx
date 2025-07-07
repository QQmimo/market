import style from "./Content.module.scss";

export function Content({ element }) {
    return (
        <main className={style.content}>
            {element}
        </main>
    );
}