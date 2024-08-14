"use client";

import { CommentProps } from "@/app/types/types";
import styles from "../styles.module.css";

interface IProps {
  comments: CommentProps[];
}

const Comments = ({ comments }: IProps) => {
  return (
    <section className={styles.commentsContainer}>
      <h2>Todos os comentários</h2>
      {comments.length === 0 && (
        <span>Nenhum comentário foi encontrado...</span>
      )}

      {comments.map((comment) => (
        <article className={styles.comment} key={comment.id}>
          <p>{comment.comment}</p>
        </article>
      ))}
    </section>
  );
};

export default Comments;
