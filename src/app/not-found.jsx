import BtnPricing from "./components/BtnPricing"
export default function Notfound() {
  return (
    <section style={{minHeight:"100VH"}}>
        <div className="text__center why">
            <h4>404</h4>
            <h1>الصفحة غير موجودة</h1>
            <p style={{maxWidth:"560PX",margin:" 0 auto", marginBottom:"1REM"}}>آسف، الصفحة التي تبحث عنها غير موجودة   قد تكون الصفحة التي تحاول الوصول إليها قد حُذفت أو نُقلت إلى مكان آخر  </p>
            <BtnPricing link={"/"} classn={"btn__submit"} name=" الصفحة الرئيسية"></BtnPricing>
        </div>
    </section>
  )
}
