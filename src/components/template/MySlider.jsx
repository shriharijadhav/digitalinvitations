import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Flex } from '@chakra-ui/react';

import slideOne from '../../assets/images/slideShow/slideOne.avif'
import slideTwo from '../../assets/images/slideShow/slideTwo.avif'
import slideThree from '../../assets/images/slideShow/slideThree.avif'
import slideFour from '../../assets/images/slideShow/slideFour.avif'
import slideSix from '../../assets/images/slideShow/slideSix.avif'
import slideSeven from '../../assets/images/slideShow/slideSeven.avif'
import slideEight from '../../assets/images/slideShow/slideEight.avif'
import slideNine from '../../assets/images/slideShow/slideNine.avif'
import slideTen from '../../assets/images/slideShow/slideTen.avif'
import slideEleven from '../../assets/images/slideShow/slideEleven.avif'
import slideTwelve from '../../assets/images/slideShow/slideTwelve.webp'

const slideShowImageArray = [slideOne,slideThree,slideFour,slideSix,slideSeven,slideEight,slideNine,slideTen,slideEleven,slideTwelve]

 const MySlider = () => {

    
  return (
    <Flex position={'absolute'} w={'100%'} h={'100%'}>
      <Swiper  modules={[ Pagination,Autoplay]} className="mySwiper" 

       breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      spaceBetween={false}
       slidesPerGroup={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      
       style={{padding:'0px 0px',gap:'0px',opacity:'1'}}
      >
      {
        slideShowImageArray.map((item, index) =>(
          <SwiperSlide key={index}>
            <Flex h={'100%'} backgroundSize={'cover'}  backgroundImage={`url(${item})`} >  </Flex>
          </SwiperSlide>
        ))
      }
       

      <SwiperSlide>
        <Flex h={'100%'} backgroundSize={'contain'} backgroundImage={`url(${slideTwo})`} >  </Flex>
      </SwiperSlide>

       

      
      
  


      </Swiper>
    </Flex>
  );
}

export default MySlider


