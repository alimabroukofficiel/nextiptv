




"use client"
import { useState } from 'react'
import styles from '../page.module.css'
import { FetchData } from './FetchData'
import PostCard from './PostCard'

let page = 2;
export default function BtnLoad() {
  const [data, setData] = useState([])
  const [hasMoreData, setHasMoreData] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleLoadMore = () => {
    if (hasMoreData) {
      setLoading(true)
      FetchData(page).then((res) => {
        if (res.length > 0) {
          setData([...data, ...res])
          page++
        } else {
          setHasMoreData(false)
        }
        setLoading(false)
      })
    }
  }

  return (
    <>
      <div className={styles.tutorials__list}>
        {data.map((item, index) => (
          <PostCard key={index} item={item} />
        ))}
      </div>
      {hasMoreData && (
        <div className={styles.loadMore__container}>
          <button onClick={handleLoadMore} disabled={loading} className="btn">
            {loading ? <div className="spinner" style={{width:"25px",height:"25PX"}}></div> : 'Load More'}
          </button>
        </div>
      )}
    </>
  )
}
