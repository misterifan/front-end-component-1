"use client";

import styles from "./SelectionListing.module.css";
import { useListingCheckState } from "./useListingCheckState";
import Button from "@/components/button/button";
import CheckboxWithLabel from "@/components/checkboxWithLabel/checkboxWithLabel";

export default function SelectionListing({
    title = "All Pages",
    items = [],
    onChange = () => { },
}) {
    const { allChecked, checkedList, toggleAll, toggleSingle } = useListingCheckState(items);

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
            <CheckboxWithLabel label={title} checked={allChecked} onChange={handleToggleAll} />
            
            <hr />

            {/* Items */}
            {items.map((item, index) => (
                <CheckboxWithLabel label={item} checked={checkedList[index]} onChange={() => handleToggleSingle(index)} />
            ))}

            <hr />

            <Button text={'Done'} />
        </div>
    );
}
