import { FaTrash } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import styles from "../styles.module.css";
import { TaskProps } from "../../types/types";
import Link from "next/link";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

interface Props {
  task: TaskProps;
}

const Task = ({ task }: Props) => {
  const handleShare = async (taskId: string) => {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}/task/${taskId}`
    );

    alert("Link de compartilhamento copiado com sucesso!");
  };

  const handleDeleteTask = async (taskId: string) => {
    const docRef = doc(db, "tarefas", taskId);
    await deleteDoc(docRef);
  };

  return (
    <article className={styles.task}>
      {task.public && (
        <div className={styles.tagContainer}>
          <label className={styles.tag}>PÚBLICO</label>
          <button
            className={styles.shareButton}
            onClick={() => handleShare(task.id)}
          >
            <FiShare2 size={22} color="#3183ff" />
          </button>
        </div>
      )}

      <div className={styles.taskContent}>
        {task.public ? (
          <Link href={`/task/${task.id}`}>
            <p>{task.tarefa}</p>
          </Link>
        ) : (
          <p>{task.tarefa}</p>
        )}

        <button
          className={styles.trashButton}
          onClick={() => handleDeleteTask(task.id)}
        >
          <FaTrash size={24} color="#ea3140" />
        </button>
      </div>
    </article>
  );
};

export default Task;
