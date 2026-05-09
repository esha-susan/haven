import styles from './QuestPanel.module.css'

function QuestPanel({ quest, isCompleted, onComplete, onSaveLater }) {
  return (
    <div className={`${styles.panel} ${isCompleted ? styles.completed : ''}`}>

      <div className={styles.topAccent}>
        <span className={styles.accentLine} />
        <span className={styles.accentText}>today's quest</span>
        <span className={styles.accentLine} />
      </div>

      <h2 className={styles.title}>{quest.title}</h2>

      <p className={styles.description}>{quest.description}</p>

      {!isCompleted ? (
        <div className={styles.actions}>
          <button className={styles.completeBtn} onClick={onComplete}>
             Mark Complete
          </button>
          <button className={styles.laterBtn} onClick={onSaveLater}>
            Keep for Later
          </button>
        </div>
      ) : (
        <div className={styles.completedMessage}>
          <span className={styles.completedIcon}>✦</span>
          <p className={styles.completedText}>
            Quest complete. Well done.
          </p>
        </div>
      )}

    </div>
  )
}

export default QuestPanel