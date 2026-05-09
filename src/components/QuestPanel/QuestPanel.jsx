import styles from './QuestPanel.module.css'

function QuestPanel({quest,isCompleted,onComplete, onSaveLater}){
    return(
        <div className={`${styles.panel} ${isCompleted?styles.isCompleted:''}`}>
            <div className={styles.topAccent}>
                <span className={styles.accentLine}/>
                <span className={styles.accentText}>Today's quest</span>
            </div>
        </div>
    )
}
export default QuestPanel