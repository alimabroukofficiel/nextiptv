import BtnPricing from '../../components/BtnPricing'
import success from '../../assets/icons/success.png'
import Image from 'next/image'
export default function page() {
    return (
        <section style={{ minHeight: "100VH" }}>
            <div className="text__center why">
                <Image src={success} alt='' width={100} height={100}/>
                <h1>تم الدفع بنجاح</h1>
                <p style={{ maxWidth: "560PX", margin: " 0 auto", marginBottom: "1REM" }}>تم الشراء بنجاح! شكرًا لثقتكم بنا. ستتلقى قريبًا رسالة عبر بريدك الإلكتروني تحتوي على تفاصيل اشتراكك، بما في ذلك بيانات حسابك وطريقة الوصول إلى الخدمة. شكرًا مرة أخرى ونتمنى لك فرجة ممتعًا!                </p>
                    < BtnPricing link={"https://web.whatsapp.com/"} classn={"btn__submit"} name={"تواصل معنا"}></BtnPricing>
            </div>
        </section>
    )
}
