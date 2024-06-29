import Image from "next/image"
import bg from '../assets/images/a.png'
export default function Hero() {
  return (
    <section>
        <div className="hero__container">
            <Image  src={bg} alt="ee" fill/>
        </div>
    </section>
  )
}
