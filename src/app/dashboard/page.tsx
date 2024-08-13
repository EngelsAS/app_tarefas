import { Metadata } from "next";
import { getAuthSession } from "../lib/auth";
import { redirect } from "next/navigation";
import styles from "./styles.module.css";
import TextArea from "@/components/TextArea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import Form from "./components/form";

export const metadata: Metadata = {
  title: "Meu Painel de Tarefas",
};

const Dashboard = async () => {
  const session = await getAuthSession();
  // console.log(session);

  if (!session) redirect("/");

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>
            <Form user={{ email: session?.user?.email }} />
          </div>
        </section>

        <section className={styles.taskContainer}>
          <h1>Minhas Tarefas</h1>
          <article className={styles.task}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>PÚBLICO</label>
              <button className={styles.shareButton}>
                <FiShare2 size={22} color="#3183ff" />
              </button>
            </div>

            <div className={styles.taskContent}>
              <p>minha primeira task de exemplo</p>
              <button className={styles.trashButton}>
                <FaTrash size={24} color="#ea3140" />
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
