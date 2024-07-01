import styles from "./page.module.css";
import { FetchData } from "./_components/FetchData";
import PostCard from "./_components/PostCard";
import Badreq from '../components/Badreq'

export default async function page() {
    let data = [];
    try {
        data = await FetchData(1);
    } catch (error) {
        console.error('Error fetching data:', error);
        return <Badreq />;
    }
    if (!data || data.length === 0) {
        return <Badreq></Badreq>;
    }
    return (
        <section className={styles.tutorials__section}>
            <div className={styles.tutorials__list}>
                {data.map((item, index) => (
                    <PostCard key={index} item={item}/>
                ))}
            </div>
        </section>
    );
}
