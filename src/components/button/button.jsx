"use client";

import styles from "./button.module.css";

export default function Button({ text = "Button" }) {
    return (
        <button className={styles.button}>{text}</button>
    );
}
