import { Outlet } from "react-router";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.title}>React Playground</span>

          <p className={styles.description}>
            A collection of frontend exercises and experiments to practice
            real-world React patterns.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <span>
          Crafted with <span aria-hidden="true">♥</span> by me!
        </span>
      </footer>
    </div>
  );
};
