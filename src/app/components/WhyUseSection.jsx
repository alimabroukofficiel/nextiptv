import Link from "next/link"
import Image from "next/image"
import Icon__money from '../assets/icons/money-back.svg'
import Icon__suppport from '../assets/icons/support-a.svg'
import Icon__tv from '../assets/icons/tv-a.svg'
import Icon__4K from '../assets/icons/4k.svg'
import BtnPricing from "./BtnPricing"
export default function WhyUseSection(props) {
  return (
    <section className="why__container">
    <div className="text__center why">
         <h4>لماذا نحن ؟</h4>
         <h1>استمتع بجودة تفوق التوقعات </h1>
         <p>مع اشتراكاتنا، تحصل على جودة لا مثيل لها، مرونة تامة، وتجربة مشاهدة مذهلة تناسب جميع احتياجاتك. تم تصميم خدماتنا بعناية لتلبية توقعاتك، مما يوفر لك تجربة ترفيهية فريدة تلبي جميع أذواقك. إليك بعض الميزات التي تجعلنا الخيار الأفضل.
         </p>
    </div>
    <div className="whyCard__list">
         <div className="whuCard__item">
             <div className="main__icon">
                 <Image src={Icon__tv} width={45} height={45} alt="icon why iptvego tv"/>
             </div>
             <div className="why__text">
                 <h3> مكتبة ضخمة من القنوات</h3>
                 <p>استمتع بمجموعة متنوعة من القنوات والبرامج التي تلبي جميع اهتماماتك واختياراتك الشخصية.                    </p>
             </div>
         </div>
         <div className="whuCard__item">
             <div className="main__icon">
                <Image src={Icon__money} width={45} height={45} alt="icon why iptvego money back"/>

             </div>
             <div className="why__text">
                 <h3> ضمان استرداد الأموال </h3>
                 <p>اشتراك بلا مخاطر! إذا لم تكن راضيًا تمامًا، يمكنك استرداد أموالك خلال 7 أيام دون أي تعقيدات.                    </p>
             </div>
         </div>
         <div className="whuCard__item">
             <div className="main__icon">
                <Image src={Icon__4K} width={45} height={45} alt="icon why iptvego 4K"/>

             </div>
             <div className="why__text">
                 <h3>جودة عالية ودقة 4K وHD</h3>
                 <p>تمتع بمشاهدة محتوى مذهل بجودة عالية الوضوح 4K HD، لتجربة تفاعلية وواقعية للغاية.                    </p>
             </div>
         </div>
         <div className="whuCard__item">
             <div className="main__icon">
                <Image src={Icon__suppport} width={45} height={45} alt="icon why iptvego support"/>
             </div>
             <div className="why__text">
                 <h3>دعم فني متخصص </h3>
                  <p>استفد من دعم فني فريد ومتخصص متوفر على مدار الساعة لمساعدتك في حل أي مشكلة تواجهك</p>
             </div>
         </div>
    </div>
    <div className="why__btn">
        <BtnPricing link={"/pricing"} classn={'btn'} name={"عرض جميع باقات الاشتراك"}></BtnPricing>
    </div>
 </section>
  )
}
