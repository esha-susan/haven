import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.stamp}>✦</span>
        <div className={styles.titles}>
          <h1 className={styles.logo}>haven</h1>
        </div>
        <span className={styles.stamp}>✦</span>
      </div>
    </header>
  )
}

export default Header