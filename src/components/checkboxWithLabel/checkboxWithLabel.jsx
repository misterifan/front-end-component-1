"use client";

import styles from "./checkboxWithLabel.module.css";

export default function CheckboxWithLabel({
    label = "Item",
    checked = false,
    onChange = () => { }, 
}) {
    return (
        <div className={styles.menuWithCheckbox}>
            <span>{label}</span>
            <label className={styles.customCheckbox}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <span className={styles.checkmark}></span>
            </label>
        </div>
    );
}
