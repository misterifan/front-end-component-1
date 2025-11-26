"use client";

import { useState } from "react";

export function useSelectionListingCheckState(items = []) {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedList, setCheckedList] = useState(items.map(() => false));

  const toggleAll = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setCheckedList(checkedList.map(() => newValue));
  };

  const toggleSingle = (index) => {
    const updated = [...checkedList];
    updated[index] = !updated[index];
    setCheckedList(updated);
    setAllChecked(updated.every(Boolean));
  };

  return {
    allChecked,
    checkedList,
    toggleAll,
    toggleSingle,
  };
}
