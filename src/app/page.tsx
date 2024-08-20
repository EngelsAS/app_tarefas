import Image from "next/image";
import styles from "./page.module.css";
import HeroImage from "../../public/assets/hero.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

async function getNumberOfCommentsAndTasks() {
  const commentsRef = collection(db, "comments");
  const tasksRef = collection(db, "tarefas");

  const commentsSnapshot = await getDocs(commentsRef);
  const tasksSnapshot = await getDocs(tasksRef);

  const numberOfComments = commentsSnapshot.size || 0;
  const numberOfTasks = tasksSnapshot.size || 0;

  return {
    comments: numberOfComments,
    tasks: numberOfTasks,
  };
}

export default async function Home() {
  const { comments, tasks } = await getNumberOfCommentsAndTasks();

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
            <span>+{tasks} post</span>
          </div>

          <div className={styles.infoBox}>
            <span>+{comments} comentários</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export const revalidate = 60;
