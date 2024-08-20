"use client";

import { CommentProps } from "@/app/types/types";
import styles from "../styles.module.css";
import { FaTrash } from "react-icons/fa";
import { Session } from "next-auth";
import TextArea from "@/components/TextArea";
import { ChangeEvent, FormEvent, useState } from "react";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

interface IProps {
  comments: CommentProps[];
  session: Session | null;
  taskId: string;
}

const CommentsSections = ({ comments, session, taskId }: IProps) => {
  const [input, setInput] = useState("");
  const [arrayComments, setArrayComments] = useState(comments || []);

  const handleDeleteComment = async (id: string) => {
    try {
      const docRef = doc(db, "comments", id);
      await deleteDoc(docRef);

      setArrayComments((prev) => prev.filter((comment) => comment.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendComment = async (e: FormEvent) => {
    e.preventDefault();

    if (input === "") return;

    if (!session?.user?.email || !session.user.name) return;

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        comment: input,
        created: new Date(),
        user: session.user.email,
        name: session.user.name,
        taskId: taskId,
      });

      const data = {
        id: docRef.id,
        comment: input,
        user: session.user.email,
        name: session.user.name,
        taskId: taskId,
      };

      setArrayComments((prev) => [...prev, data]);

      setInput("");
    } catch (error) {}
  };

  return (
    <>
      <section className={styles.commentsContainer}>
        <h2>Deixar comentário</h2>

        <form onSubmit={handleSendComment}>
          <TextArea
            value={input}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInput(e.target.value)
            }
            placeholder="Digite seu comentário"
          />
          <button
            type="submit"
            disabled={!session?.user}
            className={styles.commentButton}
          >
            Enviar comentário
          </button>
        </form>
      </section>
      <section className={styles.commentsContainer}>
        <h2>Todos os comentários</h2>
        {arrayComments.length === 0 && (
          <span>Nenhum comentário foi encontrado...</span>
        )}

        {arrayComments.map((comment) => (
          <article className={styles.comment} key={comment.id}>
            <div className={styles.headComment}>
              <label className={styles.commentLabel}>{comment.name}</label>
              {comment.user === session?.user?.email && (
                <button
                  className={styles.buttonTrash}
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  <FaTrash size={18} color="#EA3140" />
                </button>
              )}
            </div>
            <p>{comment.comment}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default CommentsSections;
