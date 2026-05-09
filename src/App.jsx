import { useState } from 'react'
import Header from './components/Header/Header'
import DeckSection from './components/DeckSection/DeckSection'
import StampCard from './components/StampCard/StampCard'
import QuestPanel from './components/QuestPanel/QuestPanel'
import quests from './data/quests'
import styles from './App.module.css'

function App() {
  const [drawnQuest, setDrawnQuest] = useState(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  function handleDraw() {
    const randomIndex = Math.floor(Math.random() * quests.length)
    const quest = quests[randomIndex]
    setDrawnQuest(quest)

    setTimeout(() => {
      setIsRevealed(true)
    }, 100)
  }

  function handleComplete() {
    setIsCompleted(true)
  }

  function handleSaveLater() {
    console.log('Saved for later')
  }

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