"use client";

import TextArea from "@/components/TextArea";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "../styles.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

// This rule allows anyone with your Firestore database reference to view, edit,
// and delete all data in your Firestore database. It is useful for getting
// started, but it is configured to expire after 30 days because it
// leaves your app open to attackers. At that time, all client
// requests to your Firestore database will be denied.
//
// Make sure to write security rules for your app before that time, or else
// all client requests to your Firestore database will be denied until you Update
// your rules

interface FormProps {
  user: {
    email: string | undefined | null;
  };
}

const Form = ({ user }: FormProps) => {
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);

  const handleRegisterTask = async (e: FormEvent) => {
    e.preventDefault();

    if (input === "") {
      return;
    }

    try {
      await addDoc(collection(db, "tarefas"), {
        tarefa: input,
        created: new Date(),
        user: user?.email,
        public: publicTask,
      });

      setInput("");
      setPublicTask(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleRegisterTask}>
      <TextArea
        value={input}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInput(e.target.value)
        }
        placeholder="Digite qual sua tarefa..."
      />
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={publicTask}
          onChange={(e) => setPublicTask(e.target.checked)}
          className={styles.checkbox}
        />
        <label>Deixar tarefa pública?</label>
      </div>

      <button type="submit" className={styles.button}>
        Registrar
      </button>
    </form>
  );
};

export default Form;
