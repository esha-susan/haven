import styles from './DailyLockMessage.module.css'

function DailyLockMessage() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.iconRow}>
        <span className={styles.star}>✦</span>
        <span className={styles.star}>✦</span>
        <span className={styles.star}>✦</span>
      </div>

      <h3 className={styles.heading}>
        You're all done for today.
      </h3>

      <p className={styles.subtext}>
        Your next quest arrives tomorrow. Rest well, you've earned it.
      </p>

      <div className={styles.timeRow}>
        <span className={styles.timeLabel}>Next quest in</span>
        <span className={styles.countdown}>{getTimeUntilMidnight()}</span>
      </div>

    </div>
  )
}

function getTimeUntilMidnight() {
  const now       = new Date()
  const midnight  = new Date()

  midnight.setHours(24, 0, 0, 0)

  const diff        = midnight - now
  const hours       = Math.floor(diff / (1000 * 60 * 60))
  const minutes     = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return `${hours}h ${minutes}m`
}

export default DailyLockMessage