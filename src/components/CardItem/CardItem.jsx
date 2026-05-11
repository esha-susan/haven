import { useState } from 'react'
import styles from './CardItem.module.css'

function CardItem({ quest, onPick, isHidden }) {
  const [isFlipped, setIsFlipped] = useState(false)

  function handleClick() {
    if (isFlipped) return
    setIsFlipped(true)
    setTimeout(() => {
      onPick(quest)
    }, 700)
  }

  return (
    <div
      className={`${styles.cardWrapper} ${isHidden ? styles.hidden : ''}`}
      style={{ '--rotation': `${Math.random() * 6 - 3}deg` }}
    >
      <div
        className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
        onClick={handleClick}
      >
        <div className={styles.cardBack}>
          <div className={styles.backPattern}>
            <span className={styles.backLogo}>haven</span>
            <span className={styles.backStar}>✦</span>
          </div>
        </div>

        <div className={styles.cardFront}>
          {quest.stamp ? (
            <img
              src={`/stamps/${quest.stamp}`}
              alt={quest.title}
              className={styles.stampImage}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderStar}>✦</span>
              <p className={styles.placeholderTitle}>{quest.title}</p>
            </div>
          )}
          <div className={styles.frontFooter}>
            <span className={styles.footerText}>haven ✦ No. {quest.id}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardItem