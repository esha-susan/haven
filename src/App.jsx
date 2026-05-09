import Header from './components/Header/Header'
import DeckSection from './components/DeckSection/DeckSection'
import StampCard from './components/StampCard/StampCard'
import QuestPanel from './components/QuestPanel/QuestPanel'
import useDailyQuest from './hooks/useDailyQuest'
import styles from './App.module.css'

function App() {
  const {
    drawnQuest,
    isRevealed,
    isCompleted,
    handleDraw,
    handleComplete,
    handleSaveLater,
  } = useDailyQuest()

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        {!drawnQuest ? (
          <DeckSection onDraw={handleDraw} />
        ) : (
          <div className={styles.revealLayout}>
            <StampCard quest={drawnQuest} isRevealed={isRevealed} />
            <QuestPanel
              quest={drawnQuest}
              isCompleted={isCompleted}
              onComplete={handleComplete}
              onSaveLater={handleSaveLater}
            />
          </div>
        )}
      </main>
    </div>
  )
}

export default App