'use client';
import { useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselComponent({ items }) {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(items.length, 3),
    slidesToScroll: 1,
    arrows: true,
    autoplay : true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
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
      <Slider {...settings}>
        {items.map((item, idx) => (
          <a href='https://moviesandtv.myvi.in/section/mystery-mania-myrecobot' target='_blank' rel="noopener noreferrer" key={idx}>
          <div key={idx} className="px-2 ">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <img
                src={item.img_url}
                alt={item.content_name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium">{item.content_name}</h3>
              </div>
            </div>
          </div>
          </a>
        ))}
      </Slider>
      
      
    </div>
    
  );
}
