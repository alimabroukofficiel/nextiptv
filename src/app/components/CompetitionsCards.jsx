import Image from "next/image"
import Link from "next/link"
import axios from "axios"


export default  async function MoviesCards() {
    let data = []
    try {
        // Example API endpoint, replace with your actual endpoint
        const apiUrl = 'http://localhost:1337/api/competitions?populate=*';
        const response = await axios.get(apiUrl);
         data = response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        };

  return (
    <section>
        <div className="text__content">
            <h2>مسابقات رياضية            </h2>
        </div>
        <div className="cards__list">
      {data.length === 0 ? (
        Array.from({ length: 7 }).map((_, i) => (
          <div className="card__item" key={i}> </div>
        ))
      ) : (
        data.map((data) => (
          <div key={data.id}>
              <div className="card__item">
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
    </div>
    </section>
  )
}
