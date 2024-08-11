import { Metadata } from "next";
import { getAuthSession } from "../lib/auth";
import { redirect } from "next/navigation";
import styles from "./styles.module.css";
import TextArea from "@/components/TextArea";

export const metadata: Metadata = {
  title: "Meu Painel de Tarefas",
};

const redirectIfNotAuthenticated = async () => {
  const session = await getAuthSession();

  if (!session) redirect("/");
};

const Dashboard = async () => {
  await redirectIfNotAuthenticated();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>

            <form>
              <TextArea placeholder="Digite qual sua tarefa..." />
              <div className={styles.checkboxContainer}>
                <input type="checkbox" className={styles.checkbox} />
                <label>Deixar tarefa pública?</label>
              </div>

              <button type="submit" className={styles.button}>
                Registrar
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
