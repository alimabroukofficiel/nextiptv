"use client"
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {reviews} from '../data/reviews'

export default function ReviewCard({data}) {
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 1 ,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   arrows: false, 
    //     responsive: [
    //       {
    //         breakpoint: 1122,
    //         settings: {
    //           slidesToShow: 3.5,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //        },

    //        {
    //         breakpoint: 964,
    //         settings: {
    //           slidesToShow: 2.5,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: false
    //         }
    //        },
    //        {
    //         breakpoint: 767,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: false
    //         }
    //        },
    //        {
    //         breakpoint: 400,
    //         settings: {
    //           slidesToShow: 1.5,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: false
    //         }
    //        },
      
    //     ]
    //   };
  return (
    <div className="cards__list">
               {/* {
            data.map(item =>(
              <div className="review__item" key={item.id}>
              <Image
                src={item.attributes?.image.data.attributes.url}
                alt={item.attributes?.title}
                layout="fill"
                priority={true}
                sizes="(max-width: 100%) 100%, (max-width: 100%)"
              />
          </div>
            ))
          } */}

                        {
            reviews.map((item,index) =>(
              <div className="review__item" key={index}>
              <Image
                src={item.url}
                alt={"sjs"}
                fill
                priority={true}
                sizes="(max-width: 100%) 100%, (max-width: 100%)"
              />
          </div>
            ))
          }

    </div>

  )
}
