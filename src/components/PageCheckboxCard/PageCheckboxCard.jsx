"use client";

import styles from "./PageCheckboxCard.module.css";
import { usePageCheckState } from "./usePageCheckState";

export default function PageCheckboxCard({
    title = "All Pages",
    items = [],
    onChange = () => { },
}) {
    const { allChecked, checkedList, toggleAll, toggleSingle } = usePageCheckState(items);

    const handleToggleAll = () => {
        toggleAll();
        onChange(!allChecked, checkedList.map(() => !allChecked));
    };

    const handleToggleSingle = (index) => {
        const newValue = !checkedList[index];
        toggleSingle(index);

        const updated = [...checkedList];
        updated[index] = newValue;

        onChange(updated.every(Boolean), updated);
    };

    return (
        <div className={styles.card}>
            {/* All */}
            <div className={styles.menuWithCheckbox}>
                <span>{title}</span>
                <label className={styles.customCheckbox}>
                    <input
                        type="checkbox"
                        checked={allChecked}
                        onChange={handleToggleAll}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            </div>

            <hr />

            {/* Items */}
            {items.map((item, index) => (
                <div className={styles.menuWithCheckbox}>
                    <span>{item}</span>
                    <label className={styles.customCheckbox}>
                        <input
                            type="checkbox"
                            checked={checkedList[index]}
                            onChange={() => handleToggleSingle(index)}
                        />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
            ))}

            <hr />

            <button className={styles.button}>Done</button>
        </div>
    );
}
