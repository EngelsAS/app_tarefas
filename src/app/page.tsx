import Image from "next/image";
import styles from "./page.module.css";
import HeroImage from "../../public/assets/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          className={styles.heroImage}
          alt="Logo Tarefas+"
          src={HeroImage}
          priority
        />
        <h1 className={styles.title}>
          Sistema feito para você organizar seus estudos e tarefas
        </h1>
        <div className={styles.infos}>
          <div className={styles.infoBox}>
            <span>+12 post</span>
          </div>

          <div className={styles.infoBox}>
            <span>+90 comentários</span>
          </div>
        </div>
      </main>
    </div>
  );
}
