'use client';
import { useRef } from 'react';
import Link from 'next/link'; // ✅ import Next.js Link

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselComponent({ items }) {
  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current?.slickPlay();
  };

  const pause = () => {
    sliderRef.current?.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(items.length, 3),
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-2 mt-4 mb-4">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, idx) => (
          <div key={idx} className="px-2">
            <Link href={item.contentPath}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200 cursor-pointer">
                <img
                  src={item.imgurl}
                  alt={item.contentname}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-medium">{item.contentname}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
