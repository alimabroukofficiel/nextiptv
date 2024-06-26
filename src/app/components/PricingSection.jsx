import React from 'react'
import Image from 'next/image'
import icon__visa from '../assets/icons/visa.svg'
import icon__mastter from '../assets/icons/matster.svg'
import icon__check from '../assets/icons/check.svg'
import googlePay from '../assets/icons/google-pay.svg'
import applePay from '../assets/icons/apple-pay.svg'
import Link from 'next/link'

import BtnPricing from './BtnPricing'
export default function PricingSrction() {
  return (
    <section className="plans__container">
            <div className="text__center">
                <h1>اشتراكات بأسعار معقولة لكل حالة</h1>
                <p>اختر اشتراكًا مميزًا، واستمتع بمشاهدة أحدث الأفلام، ومباريات الفرق المفضلة لديك، والمسابقات الرياضية المثيرة،اشتراكنا يقدم أكثر من 1500 قناة بجودة عالية،            </p>
                <div className="payment__list">
                    <span className="payment__item"><Image src={icon__visa} alt='iptv subscription visa card' fill /></span>
                    <span className="payment__item"><Image src={icon__mastter} alt='iptv subscription mastercard' fill /></span>
                    <span className="payment__item"><Image src={googlePay} alt='iptv subscription apple pay' width={100} height={55} /></span>
                    <span className="payment__item"><Image src={applePay} alt='iptv subscription apple pay' width={100} height={55} /></span>
                </div>
            </div>
            <div className="plans__list">
                <div className="plan__item">
                    <div className="text__center"><h2>$10.99 <span>/شهر واحد</span></h2></div>
                    <ul className="plan__detials">
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span>ما يصل إلى 18.000 قناة</span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> ما يصل إلى 40،000 فودز                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> جودة صورة 8K / 4K                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> بدون تجميد                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> 99.9% وقت تشغيل الخادم                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> دعم 24/7                        </span></li>
                    </ul>
                    <BtnPricing link="/why-us" classn="plan__btn" name={"متابعة"}></BtnPricing>
                </div>
                <div className="plan__item">
                     <div className="text__center"><h2>$10.99 <span>/شهر واحد</span></h2></div>
                     <ul className="plan__detials">
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span>ما يصل إلى 18.000 قناة</span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> ما يصل إلى 40،000 فودز                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> جودة صورة 8K / 4K                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> بدون تجميد                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> 99.9% وقت تشغيل الخادم                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> دعم 24/7                        </span></li>
                    </ul>
                    <BtnPricing link="/why-us" classn="plan__btn" name={"متابعة"}></BtnPricing>
                </div>
                <div className="plan__item">
                     <div className="text__center"><h2>$10.99 <span>/شهر واحد</span></h2></div>

                     <ul className="plan__detials">
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span>ما يصل إلى 18.000 قناة</span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> ما يصل إلى 40،000 فودز                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> جودة صورة 8K / 4K                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> بدون تجميد                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> 99.9% وقت تشغيل الخادم                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> دعم 24/7                        </span></li>
                    </ul>
                    <BtnPricing link="/why-us" classn="plan__btn" name={"متابعة"}></BtnPricing>
                </div>
                <div className="plan__item">
                    <div className="text__center"><h2>$10.99 <span>/شهر واحد</span></h2></div>
                    <ul className="plan__detials">
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span>ما يصل إلى 18.000 قناة</span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> ما يصل إلى 40،000 فودز                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> جودة صورة 8K / 4K                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> بدون تجميد                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> 99.9% وقت تشغيل الخادم                        </span></li>
                        <li><Image src={icon__check} alt='icon' width={25} height={25}/><span> دعم 24/7                        </span></li>
                    </ul>
                    <BtnPricing link="/why-us" classn="plan__btn" name={"متابعة"}></BtnPricing>
                </div>
            </div>
        </section>

  )
}
