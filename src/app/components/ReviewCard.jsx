"use client"
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ReviewCard({key , data}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 7,
        slidesToScroll: 6,
        arrows: false, 
        responsive: [
          {
            breakpoint: 1122,
            settings: {
              slidesToShow: 4.5,
              slidesToScroll: 4.5,
              infinite: true,
              dots: true
            }
           },
      
        ]
      };
  return (
    <div className="review__item" key={key}>
    <Image
      src={data.attributes?.image.data.attributes.url}
      alt={data.attributes?.title}
      layout="fill"
      priority={true}
      sizes="(max-width: 100%) 100%, (max-width: 100%)"
    />
      </div>
  )
}
