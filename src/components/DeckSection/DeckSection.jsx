import styles from './DeckSection.module.css'
import CardItem from '../CardItem/CardItem'

function DeckSection({ phase, fourQuests, onShuffle, onCardPick }) {
  const isSelecting = phase === 'selecting'

  return (
    <section className={styles.section}>

      <div className={styles.topText}>
        <p className={styles.date}>{getTodayFormatted()}</p>
        <h2 className={styles.heading}>
          {isSelecting ? 'Choose your quest' : 'Today\'s Quest Awaits'}
        </h2>
        <p className={styles.subtext}>
          {isSelecting
            ? 'Pick the card that calls to you'
            : 'Shuffle the deck to reveal your options'}
        </p>
      </div>

      {!isSelecting ? (
        <div className={styles.deckStack}>
          <div className={`${styles.card} ${styles.card3}`} />
          <div className={`${styles.card} ${styles.card2}`} />
          <div className={`${styles.card} ${styles.card1}`} />
        </div>
      ) : (
        <div className={styles.cardRow}>
          {fourQuests.map((quest, index) => (
            <CardItem
              key={quest.id}
              quest={quest}
              onPick={onCardPick}
              isHidden={false}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      )}

      {!isSelecting && (
        <button className={styles.drawButton} onClick={onShuffle}>
           Shuffle & Draw
        </button>
      )}

    </section>
  )
}

function getTodayFormatted() {
  const today = new Date()
  return today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}

export default DeckSection