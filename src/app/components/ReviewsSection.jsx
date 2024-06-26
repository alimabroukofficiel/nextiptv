import Link from 'next/link'
import ReviewCard from './ReviewCard';
import axios from 'axios';
export default async function ReviewsSection() {
  let data = [];
  let error = null;
  try {
    const response = await axios.get(`http://localhost:1337/api/reviews/?populate=*`);
    data = response.data.data;
  } catch (err) {
    console.error('Error fetching data:', err);
    error = err.message;
  }
  console.log(data)
  return (
<section className="custmer__reviews ">
   <div className="text__center reviews">
        <h4>جدار الحب</h4>
        <h1>انضم إلى أكثر من 80.000 مصمم        </h1>
        <p >لقد أذهلنا الدعم المستمر من مجتمع التصميم المذهل لدينا. إنهم يلهموننا كل يوم. هل تريد <Link href={"/ab/pricing"}><span style={{textDecoration:"underline",cursor:"pointer"}}>الانضمام إلى جدار الحب لدينا ؟</span></Link>
        </p>
    </div>
    <div className="slider-container">
       <ReviewCard  data={data} />
    </div>

</section>
  )
}
