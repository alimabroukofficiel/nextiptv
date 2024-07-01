import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import author from "../../assets/images/author.jpg";
import { MotionDiv } from "./MotionDiv";
const getdate = (date) => {
  const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: ar });
  return formattedDate;
};
const getSlug = (item) => {
  return item.replace(/ /g, "-").replace(/\./g, "").toLowerCase();
};
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export default function PostCard({ item, index }) {
  return (
    <Link href={"tutorials/post/" + getSlug(item.attributes?.title)}>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        <div className={styles.tutorial__item} key={index}>
          <div className={styles.item__image}>
            <Image
              src={item.attributes?.image.data.attributes.url}
              alt={item.attributes?.title}
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.item__text}>
            <h3>{item.attributes?.title} </h3>
            <p>{item.attributes?.description}</p>
          </div>
          <div className={styles.item__date}>
            <div className={styles.item__author}>
              <Image src={author} alt="ee" fill objectFit="cover" />
            </div>
            <div className={styles.item__details}>
              <h5>جوردان هيوز</h5>
              <p>
                تم التحديث في<i>{getdate(item.attributes.updatedAt)} </i>
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
}
