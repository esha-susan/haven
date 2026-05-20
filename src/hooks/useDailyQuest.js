import { useState, useEffect } from 'react'
import quests from '../data/quests'

function getTodayString() {
  return new Date().toISOString().slice(0, 10)
}

function pickFourQuests(excludeIds) {
  const pool = quests.filter(q => !excludeIds.includes(q.id))
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 4)
}

function useDailyQuest() {
  const [phase, setPhase]               = useState('idle')
  const [fourQuests, setFourQuests]     = useState([])
  const [drawnQuest, setDrawnQuest]     = useState(null)
  const [isCompleted, setIsCompleted]   = useState(false)
  const [isSavedLater, setIsSavedLater] = useState(false)

  useEffect(() => {
    const lastDrawDate    = localStorage.getItem('lastDrawDate')
    const todayQuestId    = localStorage.getItem('todayQuestId')
    const todayCompleted  = localStorage.getItem('todayCompleted')
    const todaySavedLater = localStorage.getItem('todaySavedLater')
    const today           = getTodayString()

    if (lastDrawDate === today && todayQuestId) {
      const quest = quests.find(q => q.id === Number(todayQuestId))
      if (quest) {
        setDrawnQuest(quest)
        setIsCompleted(todayCompleted === 'true')
        setIsSavedLater(todaySavedLater === 'true')
        setPhase(todayCompleted === 'true' ? 'completed' : 'revealed')
      }
    }
  }, [])

  function getRecentIds() {
    try {
      const stored = localStorage.getItem('recentQuestIds')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  }

  function updateRecentIds(newId) {
    const recent = getRecentIds()
    const updated = [newId, ...recent].slice(0, 4)
    localStorage.setItem('recentQuestIds', JSON.stringify(updated))
  }

  function handleShuffle() {
    const excludeIds = getRecentIds()
    const four = pickFourQuests(excludeIds)
    setFourQuests(four)
    setPhase('selecting')
  }

  function handleCardPick(quest) {
    const today = getTodayString()
    updateRecentIds(quest.id)
    localStorage.setItem('lastDrawDate',    today)
    localStorage.setItem('todayQuestId',    String(quest.id))
    localStorage.setItem('todayCompleted',  'false')
    localStorage.setItem('todaySavedLater', 'false')
    setDrawnQuest(quest)
    setIsSavedLater(false)
    setIsCompleted(false)
    setPhase('revealed')
  }

  function handleComplete() {
    localStorage.setItem('todayCompleted',  'true')
    localStorage.setItem('todaySavedLater', 'false')
    setIsCompleted(true)
    setIsSavedLater(false)
    setPhase('completed')
  }

  function handleSaveLater() {
    localStorage.setItem('todayCompleted',  'false')
    localStorage.setItem('todaySavedLater', 'true')
    setIsSavedLater(true)
  }

  return {
    phase,
    fourQuests,
    drawnQuest,
    isCompleted,
    isSavedLater,
    handleShuffle,
    handleCardPick,
    handleComplete,
    handleSaveLater,
  }
}

export default useDailyQuest