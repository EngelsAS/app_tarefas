import { Metadata } from "next";
import { getAuthSession } from "../lib/auth";
import { redirect } from "next/navigation";
import styles from "./styles.module.css";
import Form from "./components/form";
import Tasks from "./components/tasks";

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

        <Tasks user={{ email: session?.user?.email }} />
      </main>
    </div>
  );
};

export default Dashboard;
