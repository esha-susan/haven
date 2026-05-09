import styles from './StampCard.module.css'

function StampCard({ quest, isRevealed }) {
  return (
    <div className={`${styles.stampWrapper} ${isRevealed ? styles.revealed : ''}`}>

      <div className={styles.stamp}>

        <div className={styles.perforation} />

        <div className={styles.imageArea}>
          {quest.stamp ? (
            <img
              src={`/stamps/${quest.stamp}`}
              alt={quest.title}
              className={styles.stampImage}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>✦</span>
              <p className={styles.placeholderText}>{quest.title}</p>
            </div>
          )}
        </div>

        <div className={styles.stampFooter}>
              
          <span className={styles.footerText}>No. {quest.id}</span>
        </div>

      </div>

    </div>
  )
}

export default StampCard