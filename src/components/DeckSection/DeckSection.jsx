import styles from './DeckSection.module.css'

function DeckSection({onDraw}){
    return(
        <section className={styles.topText}>
            <div className={styles.topText}>
                <p className={styles.date}>{getTodayFormatted()}</p>
                <h2 className={styles.heading}>Today's Quest Awaits</h2>
                <p className={styles.subtext}>Draw a stamp to reveal today's quest</p>
            </div>

            <div className={styles.deckWrapper}>
                <div className={styles.deckstack}>
                    <div className={`${styles.card} ${styles.card3}`}/>
                    <div className={`${styles.card} ${styles.card2}`}/>
                    <div className={`${styles.card} ${styles.card1}`}/>
               </div>
            </div>
            <button className={styles.drawButton} onClick={onDraw}>
                Draw Today's stamp
            </button>
        </section>
    )
}
function getTodayFormatted(){
    const today=new Date()
    return today.toLocaleDateString('en-US',{
        weekday:'long',
        month:'long',
        day:'numeric'
    })
}
export default DeckSection