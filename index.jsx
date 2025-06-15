import react from "react";
import { createRoot } from "react-dom/client";
import { App } from "UI";
import style from "./index.module.scss";

createRoot(document.getElementById('root'))
    .render(
        <App />
    );