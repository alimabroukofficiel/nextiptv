import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import netflix from '../assets/channels/netflix.svg'
import amazonprime from '../assets/channels/amazonprime.svg'
import ufc from '../assets/channels/ufc.svg'
import bbc from '../assets/channels/bbc.svg'
import espn from '../assets/channels/espn.svg'
import canal from '../assets/channels/canal.svg'
import hbo from '../assets/channels/hbo.svg'
import nationalgeographic from '../assets/channels/national-geographic.svg'

export default  async function MoviesCards() {
    let data = []
    try {
        // Example API endpoint, replace with your actual endpoint
        const apiUrl = 'http://localhost:1337/api/channels?populate=*';
        const response = await axios.get(apiUrl);
         data = response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        };

  return (
    <section>
        <div className="text__content">
            <h2>القنوات الدولية            </h2>
        </div>
      {/* <div className="cards__list">
      {data.length === 0 ? (
        Array.from({ length: 7 }).map((_, i) => (
          <div className="card__channels" key={i}> </div>
        ))
      ) : (
        data.map((data) => (
          <div key={data.id}>
              <div className="card__channels">
                <Image
                  src={data.attributes?.image.data.attributes.url}
                  alt={data.attributes?.title}
                  layout="fill"
                  priority={true}
                  sizes="(max-width: 100%) 100%, (max-width: 100%)"
                />
              </div>
          </div>
        ))
      )}
    </div> */}
    <div className="cards__list">
      <div className="card__channels" style={{backgroundColor:"#FFF"}}>
        <Image  src={netflix} alt="icon" width={120} height={120}/>
      </div>
      <div className="card__channels" style={{backgroundColor:"#fff"}}>
        <Image  src={espn} alt="icon" width={120} height={120}/>
      </div>
      <div className="card__channels" style={{backgroundColor:"#fff"}}>
        <Image  src={ufc} alt="icon" width={120} height={120}/>
      </div>
      <div className="card__channels" style={{backgroundColor:"#fff"}}>
        <Image  src={netflix} alt="icon" width={120} height={120}/>
      </div>
      <div className="card__channels" style={{backgroundColor:"#fff"}}>
        <Image  src={espn} alt="icon" width={120} height={120}/>
      </div>
      <div className="card__channels" style={{backgroundColor:"#fff"}}>
        <Image  src={ufc} alt="icon" width={120} height={120}/>
      </div>
    </div>
    </section>
  )
}
