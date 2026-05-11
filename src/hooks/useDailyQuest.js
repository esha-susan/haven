import { useState, useEffect } from 'react'
import quests from '../data/quests'

function getTodayString() {
  return new Date().toISOString().slice(0, 10)
}

function pickFourQuests(excludeId) {
  const pool = quests.filter(q => q.id !== excludeId)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 4)
}

function useDailyQuest() {
  const [phase, setPhase]           = useState('idle')
  // phases: 'idle' | 'selecting' | 'revealed' | 'completed'

  const [fourQuests, setFourQuests] = useState([])
  const [drawnQuest, setDrawnQuest] = useState(null)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const lastDrawDate   = localStorage.getItem('lastDrawDate')
    const todayQuestId   = localStorage.getItem('todayQuestId')
    const todayCompleted = localStorage.getItem('todayCompleted')
    const today          = getTodayString()

    if (lastDrawDate === today && todayQuestId) {
      const quest = quests.find(q => q.id === Number(todayQuestId))
      if (quest) {
        setDrawnQuest(quest)
        setIsCompleted(todayCompleted === 'true')
        setPhase(todayCompleted === 'true' ? 'completed' : 'revealed')
      }
    }
  }, [])

  // User clicks Shuffle
  function handleShuffle() {
    const lastQuestId = Number(localStorage.getItem('lastQuestId')) || null
    const four = pickFourQuests(lastQuestId)
    setFourQuests(four)
    setPhase('selecting')
  }

  function handleCardPick(quest) {
    const today = getTodayString()

    localStorage.setItem('lastDrawDate',   today)
    localStorage.setItem('todayQuestId',   String(quest.id))
    localStorage.setItem('todayCompleted', 'false')
    localStorage.setItem('lastQuestId',    String(quest.id))

    setDrawnQuest(quest)
    setPhase('revealed')
  }

  function handleComplete() {
    localStorage.setItem('todayCompleted', 'true')
    setIsCompleted(true)
    setPhase('completed')
  }

  function handleSaveLater() {
    console.log('Saved for later')
  }

  return {
    phase,
    fourQuests,
    drawnQuest,
    isCompleted,
    handleShuffle,
    handleCardPick,
    handleComplete,
    handleSaveLater,
  }
}

export default useDailyQuest