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
    ...data,
    created: new Date(miliseconds).toLocaleDateString(),
    taskId: taskId,
  };
};

const Task = async ({ params }: { params: { id: string } }) => {
  const docRef = doc(db, "tarefas", params.id);
  const snapshot = await getDoc(docRef);

  handleRedirect(snapshot?.data());
  const task = createTaskObject(snapshot?.data(), params.id);

  console.log(task);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{params.id}</h1>
      </main>
    </div>
  );
};

export default Task;
