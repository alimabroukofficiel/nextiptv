import styles from '../cantact-us/page.module.css'
import iconWatsssap from '../assets/icons/whatsapp.svg'
import Image from 'next/image'
export default function Cantact() {
  return (
    <div className={styles.cantcat__container}>
        <div className="text__center why">
            <h4>اتصل بنا            </h4>
            <h1>نحن هنا للمساعدة            </h1>
            <p style={{maxWidth:"600PX", margin:"0 auto"}}>تواصل مع فرق المبيعات والدعم لدينا لطرح الأسئلة المتعلقة بالمنتج وجلسات التصميم المباشر والعروض التوضيحية والمزيد.</p>
        </div>
        <div className={styles.cantact__form}>
            <div className={styles.grid__inputs}>
                <div className={styles.u__input}>
                    <label htmlFor="">الاسم الأول </label>
                    <input type="text" placeholder='أدخل اسمك الأول' />
                </div>
                <div className={styles.u__input}>
                    <label htmlFor="">اسم العائلة</label>
                    <input type="text" placeholder='أدخل  اسم العائلة' />
                </div>
            </div>
            <div className={styles.u__input}>
                <label htmlFor="">البريد الإلكتروني</label>
                <input type="text" placeholder='أدخل  البريد الإلكتروني' />
            </div>
            <div className={styles.u__input}>
                <label htmlFor="">الاسم الأول </label>
                <textarea className={styles.message__textarea} role='200' type="text" placeholder='أدخل اسمك الأول' />
            </div>
            <button className={styles.btnForm__submit}>أرسل رسالة</button>
            <button className={styles.btn}>
                <Image src={iconWatsssap} alt='icon wattsap' width={25} height={25}/>
                <span>الدردشة معنا عبر واتساب</span>
            </button>
        </div>
    </div>
  )
}
