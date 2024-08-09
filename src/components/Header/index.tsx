import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href={"/"}>
            <h1 className={styles.logoNav}>
              Tarefas<span>+</span>
            </h1>
          </Link>
          <Link href={"/dashboard"} className={styles.linkMyPanel}>
            Meu Painel
          </Link>
        </nav>

        <button className={styles.loginButton}>Acessar</button>
      </section>
    </header>
  );
};

export default Header;
