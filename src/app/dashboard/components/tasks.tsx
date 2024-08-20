"use client";

import { useEffect, useState } from "react";
import styles from "../styles.module.css";
import Task from "./task";
import {
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
import { TaskProps } from "../../types/types";

interface Props {
  user: {
    email: string | null | undefined;
  };
}

const Tasks = ({ user }: Props) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    const loadTarefas = async () => {
      const tarefasRef = collection(db, "tarefas");
      const q = query(
        tarefasRef,
        orderBy("created", "desc"),
        where("user", "==", user?.email)
      );

      onSnapshot(q, (snapshot) => {
        let lista = [] as TaskProps[];

        snapshot.forEach((item) => {
          lista.push({
            id: item.id,
            created: item.data().created,
            public: item.data().public,
            tarefa: item.data().tarefa,
            user: item.data().user,
          });
        });

        setTasks(lista);
      });
    };

    loadTarefas();
  }, [user?.email]);

  return (
    <section className={styles.taskContainer}>
      <h1>Minhas Tarefas</h1>
      {tasks.map((item) => (
        <Task key={item.id} task={item} />
      ))}
    </section>
  );
};

export default Tasks;
