import { useState } from 'react'
import Header from './components/Header/Header'
import DeckSection from './components/DeckSection/DeckSection'
import StampCard from './components/StampCard/StampCard'
import QuestPanel from './components/QuestPanel/QuestPanel'
import DailyLockMessage from './components/DailyLockMessage/DailyLockMessage'
import Footer from './components/Footer/Footer'
import SplashScreen from './components/SplashScreen/SplashScreen'
import useDailyQuest from './hooks/useDailyQuest'
import styles from './App.module.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const {
    phase,
    fourQuests,
    drawnQuest,
    isCompleted,
    isSavedLater,
    handleShuffle,
    handleCardPick,
    handleComplete,
    handleSaveLater,
  } = useDailyQuest()

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

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
              isSavedLater={isSavedLater}
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