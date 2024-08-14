import type { Metadata } from "next";
import styles from "./styles.module.css";

import { db } from "@/services/firebaseConnection";
import {
  doc,
  collection,
  query,
  where,
  getDoc,
  DocumentData,
} from "firebase/firestore";
import { redirect } from "next/navigation";
import { TaskType, TaskProps } from "@/app/types/types";
import TextArea from "@/components/TextArea";
import Form from "./components/form";
import { getAuthSession } from "@/app/lib/auth";

export const metadata: Metadata = {
  title: "Detalhes da tarefa",
};

const handleRedirect = (data: DocumentData | undefined) => {
  if (!data || !data?.public) {
    redirect("/");
  }
};

const createTaskObject = (data: DocumentData | undefined, taskId: string) => {
  const miliseconds = data?.created?.seconds * 1000;

  return {
    user: data?.user as string,
    tarefa: data?.tarefa as string,
    public: data?.public as boolean,
    created: new Date(miliseconds).toLocaleDateString(),
    id: taskId,
  };
};

const getSnapshotData = async (taskId: string) => {
  const docRef = doc(db, "tarefas", taskId);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};

const Task = async ({ params }: { params: { id: string } }) => {
  const data = await getSnapshotData(params.id);
  handleRedirect(data);

  const task = createTaskObject(data, params.id) as TaskType;

  const session = await getAuthSession();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Tarefa</h1>
        <article className={styles.task}>
          <p>{task?.tarefa}</p>
        </article>
      </main>

      <section className={styles.commentsContainer}>
        <h2>Deixar comentário</h2>

        <Form session={session} taskId={params.id} />
      </section>
    </div>
  );
};

export default Task;
