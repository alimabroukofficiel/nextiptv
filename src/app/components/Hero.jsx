import Image from "next/image";
import banner from '../assets/images/bg2.png'
import Link from "next/link";
import BtnPricing from '../components/BtnPricing'
export default function Hero() {
  return (
    <section className="hero__section">
      <div className="hero__container">
        {/* <Image src={banner} fill alt="'" objectFit="cover"/> */}
        <div className="text__center why">
            <h4>404</h4>
            <h1>الصفحة غير موجودة</h1>
            <p style={{maxWidth:"560PX",margin:" 0 auto", marginBottom:"1REM"}}>آسف، الصفحة التي تبحث عنها غير موجودة   قد تكون الصفحة التي تحاول الوصول إليها قد حُذفت أو نُقلت إلى مكان آخر  </p>
            <BtnPricing link={"/"} classn={"btn__submit"} name=" الصفحة الرئيسية"></BtnPricing>
        </div>
      </div>
    </section>
  );
}
