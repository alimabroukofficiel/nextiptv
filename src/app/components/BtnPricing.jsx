// pages/index.js
"use client"
// src/app/components/BtnPricing.jsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BtnPricing({link , classn ,name}) {
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // This will only run on the client side
    setIsClient(true);
  }, []);

  const handleClick = () => {
    setLoading(true);
    if (isClient) {
      router.push(`${link}`); // Replace with your target path
    }
  };

  return (
      <button className={classn} onClick={handleClick} disabled={loading}>
        {loading ? <div className='spinner' style={{width:"22PX",height:"22PX"}}></div> : name}
      </button>
  );
}
