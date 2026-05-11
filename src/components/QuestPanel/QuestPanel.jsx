import styles from './QuestPanel.module.css'

function QuestPanel({ quest, isCompleted, isSavedLater, onComplete, onSaveLater }) {
  return (
    <div className={`${styles.panel} ${isCompleted ? styles.completed : ''}`}>

      <div className={styles.topAccent}>
        <span className={styles.accentLine} />
        <span className={styles.accentText}>today's quest</span>
        <span className={styles.accentLine} />
      </div>

      <h2 className={styles.title}>{quest.title}</h2>

      <p className={styles.description}>{quest.description}</p>

      {!isCompleted && !isSavedLater ? (
        <div className={styles.actions}>
          <button className={styles.completeBtn} onClick={onComplete}>
            ✦ Mark Complete
          </button>
          <button className={styles.laterBtn} onClick={onSaveLater}>
            Keep for Later
          </button>
        </div>
      ) : isCompleted ? (
        <div className={styles.completedMessage}>
          <span className={styles.completedIcon}>✦</span>
          <p className={styles.completedText}>
            Quest complete. Well done.
          </p>
        </div>
      ) : (
        <div className={styles.savedMessage}>
          <span className={styles.completedIcon}>✦</span>
          <p className={styles.completedText}>
            We'll bring it back around. Rest for now — your quest will find you again tomorrow.
          </p>
        </div>
      )}

    </div>
  )
}

export default QuestPanel