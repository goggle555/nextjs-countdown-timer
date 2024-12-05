import { HeadTemplate } from "@/components/head-template";
import styles from "./index.module.css";

export default function HomePage() {
  return (
    <>
      <HeadTemplate />
      <div className={`${styles.page}`}>
        <main className={styles.main} />
        <footer className={styles.footer} />
      </div>
    </>
  );
}
