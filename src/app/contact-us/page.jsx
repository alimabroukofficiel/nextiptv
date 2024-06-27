import styles from './page.module.css'
import Contact from '../components/Contact'
export default function page() {
  return (
    <section className={styles.cantcat__container}>
        <Contact></Contact>
    </section>
  )
}
