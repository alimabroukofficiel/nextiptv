"use client"
import BtnPricing from './BtnPricing'
export default function Badreq() {
    return (
        <section style={{ minHeight: "100VH" }}>
            <div className="text__center why">
                <h4>400</h4>
                <h1>غير قادر على إظهار الصفحة</h1>
                <p style={{ maxWidth: "560PX", margin: " 0 auto", marginBottom: "1REM" }}>لم نتمكن من توصيلك بالصفحة التي كنت تبحث عنها، يرجى المحاولة مرة أخرى ابحث عن صفحة أخرى</p>
                <span onClick={()=>{window.location.reload()}}>
                <   BtnPricing link={"/"} classn={"btn__submit"} name={"أعد المحاولة"} o></BtnPricing>
                </span>
            </div>
        </section>
    )
}
