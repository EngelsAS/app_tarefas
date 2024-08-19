import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentForm}>
          <div
            className={`skeleton skeleton-text ${styles.title_skeleton}`}
          ></div>
          <div className={`skeleton ${styles.form_skeleton}`}></div>
          <div className={`skeleton ${styles.button_skeleton}`}></div>
        </div>
      </div>

      <div className={styles.taskContainer}>
        <div
          className={`skeleton skeleton-text ${styles.title_skeleton}`}
        ></div>
        <div className={`skeleton-box ${styles.task_box}`}>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
        </div>
        <div className={`skeleton-box ${styles.task_box}`}>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
        </div>
        <div className={`skeleton-box ${styles.task_box}`}>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
          <div className={`skeleton skeleton-text`}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
