"use client";

import TextArea from "@/components/TextArea";
import styles from "../styles.module.css";
import { Session } from "next-auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

interface FormProps {
  session: Session | null;
  taskId: string;
}

const Form = ({ session, taskId }: FormProps) => {
  const [input, setInput] = useState("");

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

      setInput("");
    } catch (error) {}
  };

  return (
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
  );
};

export default Form;
