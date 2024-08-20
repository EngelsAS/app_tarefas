import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`skeleton skeleton-text`}></div>

        <div className={`skeleton-box ${styles.task_box}`}>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
        </div>

        <div className={`skeleton skeleton-text ${styles.form_title}`}></div>
        <div className={`skeleton-box ${styles.form_box}`}>
          <div className={`skeleton skeleton-text`}></div>
        </div>
        <div className={`skeleton skeleton-text ${styles.form_button}`}></div>

        <div className={`skeleton skeleton-text`}></div>
        <div className={`skeleton-box ${styles.comment_box}`}>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
        </div>
        <div className={`skeleton-box ${styles.comment_box}`}>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
        </div>
        <div className={`skeleton-box ${styles.comment_box}`}>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
        </div>
      </main>
    </div>
  );
};

export default Loading;
