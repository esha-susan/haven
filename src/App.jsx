import Header from './components/Header/Header'
import DeckSection from './components/DeckSection/DeckSection'
import StampCard from './components/StampCard/StampCard'
import QuestPanel from './components/QuestPanel/QuestPanel'
import DailyLockMessage from './components/DailyLockMessage/DailyLockMessage'
import Footer from './components/Footer/Footer'
import useDailyQuest from './hooks/useDailyQuest'
import styles from './App.module.css'

function App() {
  const {
    phase,
    fourQuests,
    drawnQuest,
    isCompleted,
    handleShuffle,
    handleCardPick,
    handleComplete,
    handleSaveLater,
  } = useDailyQuest()

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>

        {(phase === 'idle' || phase === 'selecting') && (
          <DeckSection
            phase={phase}
            fourQuests={fourQuests}
            onShuffle={handleShuffle}
            onCardPick={handleCardPick}
          />
        )}

        {(phase === 'revealed' || phase === 'completed') && drawnQuest && (
          <div className={styles.revealLayout}>
            <StampCard quest={drawnQuest} isRevealed={true} />
            <QuestPanel
              quest={drawnQuest}
              isCompleted={isCompleted}
              onComplete={handleComplete}
              onSaveLater={handleSaveLater}
            />
            {phase === 'completed' && <DailyLockMessage />}
          </div>
        )}

      </main>
      <Footer />
    </div>
  )
}

export default App