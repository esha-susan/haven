import Header from './components/Header/Header'
import DeckSection from './components/DeckSection/DeckSection'
import styles from './App.module.css'

function App() {
  function handleDraw() {
    console.log('drawn')
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <DeckSection onDraw={handleDraw} />
      </main>
    </div>
  )
}

export default App