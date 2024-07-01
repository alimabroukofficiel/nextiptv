import styles from '../contact-us/page.module.css'
import iconWatsssap from '../assets/icons/whatsapp.svg'
import Image from 'next/image'
import BtnPricing from './BtnPricing'
export default function Cantact() {
  return (
    <div className={styles.cantcat__container}>
        <div className="text__center why">
            <h4>اتصل بنا            </h4>
            <h1>نحن هنا للمساعدة            </h1>
            <p style={{maxWidth:"600PX", margin:"0 auto", marginBottom:"1REM"}}>تواصل مع فرق المبيعات والدعم لدينا لطرح الأسئلة المتعلقة بالمنتج وجلسات التصميم المباشر والعروض التوضيحية والمزيد.</p>
            <BtnPricing classn={"btn__submit"} link={'/'} name={" تواصل معنا عبر واتساب"}></BtnPricing>
        </div>
    </div>
  )
}
