import { useState, useEffect } from 'react'
import quests from '../data/quests'

function getTodayString() {
  return new Date().toISOString().slice(0, 10)
}

function useDailyQuest() {

  const [drawnQuest, setDrawnQuest]     = useState(null)
  const [isRevealed, setIsRevealed]     = useState(false)
  const [isCompleted, setIsCompleted]   = useState(false)
  const [alreadyDrawn, setAlreadyDrawn] = useState(false)

  useEffect(() => {
    const lastDrawDate   = localStorage.getItem('lastDrawDate')
    const todayQuestId   = localStorage.getItem('todayQuestId')
    const todayCompleted = localStorage.getItem('todayCompleted')
    const today          = getTodayString()

    if (lastDrawDate === today && todayQuestId) {
      const quest = quests.find(q => q.id === Number(todayQuestId))

      if (quest) {
        setDrawnQuest(quest)
        setIsRevealed(true)
        setAlreadyDrawn(true)
        setIsCompleted(todayCompleted === 'true')
      }
    }
  }, []) 

  function handleDraw() {
    const today       = getTodayString()
    const randomIndex = Math.floor(Math.random() * quests.length)
    const quest       = quests[randomIndex]

    localStorage.setItem('lastDrawDate', today)
    localStorage.setItem('todayQuestId', String(quest.id))
    localStorage.setItem('todayCompleted', 'false')

    setDrawnQuest(quest)
    setAlreadyDrawn(true)

    setTimeout(() => {
      setIsRevealed(true)
    }, 100)
  }

  function handleComplete() {
    localStorage.setItem('todayCompleted', 'true')
    setIsCompleted(true)
  }

  function handleSaveLater() {
    
    console.log('Keeping for later')
  }

  return {
    drawnQuest,
    isRevealed,
    isCompleted,
    alreadyDrawn,
    handleDraw,
    handleComplete,
    handleSaveLater,
  }
}

export default useDailyQuest