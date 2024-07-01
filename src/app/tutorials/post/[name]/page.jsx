import { Metadata } from "next"
import axios from "axios";
import Image from "next/image";
import styles from '../../page.module.css'
import Notfound from "../../../not-found";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
export async function generateMetadata({ params }) {
    try {
        let data = [];
        const response = await axios.get(`${process.env.API_URL}/tutorials?populate=*`, {
            headers: {
                Authorization: "Bearer " + process.env.API_TOKEN
            }
        });
        
        data = response.data.data;
        const decodedName = decodeURIComponent(params.name);
        
        const getSlug = (item) => {
            return item.replace(/ /g, "-").replace(/\./g, "").toLowerCase();
        };
        
        const item = data.find(item => {
            return getSlug(decodedName) === getSlug(item.attributes.title);
        });
        
        if (!item) {
            return {
                title: "Not Found",
                description: "Tutorial not found",
                openGraph: {
                    images: []
                }
            };
        }
        
        return {
            title: item.attributes.title,
            description: item.attributes.description,
            openGraph: {
                images: [
                    {
                        url: item.attributes?.image?.data?.attributes?.url,
                        alt: item.attributes.title,
                    }
                ],
            },
        };
    } catch (error) {
        return null 
    }
}


export default async function page({ params }) {
    let data = [];
    try {
        const response = await axios.get(`${process.env.API_URL}/tutorials?populate=*`, {
            headers: {
                Authorization: "bearer " + process.env.API_TOKEN
            }
        });
        data = response.data.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
    const decodedName = decodeURIComponent(params.name);
    const getSlug = (item) => {
        return item.replace(/ /g, "-").replace(/\./g, "").toLowerCase();
    };
    const item = data.find(item => {
        return getSlug(decodedName) == getSlug(item.attributes.title);
    });

    if (!item) {
        return <Notfound></Notfound>;
    }
    const getdate = (date) => {
        const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: ar });
        return formattedDate;
      };
    return (

        <section className={styles.tutorials__section}>
               <div className={styles.date__middle}>
                    <p>
                    تم التحديث في<i>{getdate(item.attributes.updatedAt)} </i>

                    </p>
                </div>
            <div className={styles.tutorial__details}>
                <div className={styles.text__details}>
                    <h1>{item.attributes?.title} </h1>
                    <p>{item.attributes?.description} </p>
                </div>
                <div className={styles.image__details}>
                    <Image src={item.attributes?.image.data.attributes.url} alt='' width={100} height={100} layout="responsive" />
                </div>
            </div>
        </section>
    )
}
