import Image from "next/image"
import bg from '../assets/images/a.jpg'
export default function Hero() {
  return (
    <section>
      <div className="hero__container">
        <div className="cardHero__list">
          <Image src={bg} alt="" layout="responsive" priority={false} />
        </div>
      </div>
    </section>
  )
}
