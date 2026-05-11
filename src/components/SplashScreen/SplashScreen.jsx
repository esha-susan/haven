import { useEffect } from 'react'
import styles from './SplashScreen.module.css'

function SplashScreen({ onComplete }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.splash}>

      <div className={styles.dotPattern} />
      <div className={styles.dashedBorder} />

      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />

      <div className={styles.center}>
      <div className={styles.preTitle}>
    <span className={styles.preTitleLine} />
    <span className={styles.preTitleStar}>✦ ✦ ✦</span>
    <span className={styles.preTitleLine} />
  </div>
        <h1 className={styles.title}>haven</h1>
        <div className={styles.flourish}>
          <span className={styles.flourishLine} />
          <span className={styles.flourishDiamond} />
          <span className={styles.flourishLine} />
        </div>
        <p className={styles.tagline}>one small quest, every day</p>
        <p className={styles.note}>your quest awaits...</p>
      </div>

      <div className={styles.progressTrack}>
        <div className={styles.progressFill} />
      </div>

    </div>
  )
}

export default SplashScreen