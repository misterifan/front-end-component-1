"use client"

import styles from "@/app/page.module.css";
import PageCheckboxCard from "@/components/PageCheckboxCard/PageCheckboxCard";

export default function Home() {
  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

  const handleChange = (allChecked, listChecked) => {
    console.log("All:", allChecked);
    console.log("List:", listChecked);
  };

  return (
    <main>
      <div className={styles.container}>
        <PageCheckboxCard
          items={pages}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}
