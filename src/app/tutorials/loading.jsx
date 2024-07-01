import styles from "./page.module.css"
export default function loading() {
  return (
    <section style={{minHeight:"100VH"}}>
            <div className={styles.loadMore__container}>
                 <div className="spinner" style={{width:"25px",height:"25PX"}}></div> 
             </div>
    </section>
  )
}
