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
      <SwiperSlide>
        <Flex h={'100%'} backgroundSize={'cover'}  backgroundImage={"url('https://images.unsplash.com/photo-1425421640640-64c4debea1b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} >  </Flex>
      </SwiperSlide>
       <SwiperSlide>
        <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://cdn0.weddingwire.in/article/1678/3_2/1280/jpg/8761-wedding-background-images-infinitememories-lead.jpeg')"} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>  </Flex>
      </SwiperSlide>
       <SwiperSlide>
        <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'contain'}>  </Flex>
      </SwiperSlide>
       <SwiperSlide>
        <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
      </SwiperSlide>
       <SwiperSlide>
        <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
      </SwiperSlide>
       <SwiperSlide>
        <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1515715709530-858f7bfa1b10?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1519657814741-5781d2018f70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
      </SwiperSlide>

      <SwiperSlide>
      <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1523975545000-30bd4e5833d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
    </SwiperSlide>


    <SwiperSlide>
    <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1484849757660-7c00c60726b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
  </SwiperSlide>
  <SwiperSlide>
  <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg')"} backgroundSize={'cover'}>  </Flex>
</SwiperSlide>

  <SwiperSlide>
    <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1484979045040-0ab3854b6acb?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
  </SwiperSlide>
  <SwiperSlide>
    <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1517837125937-53bd402f49d6?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
  </SwiperSlide>
  <SwiperSlide>
    <Flex w={'100%'} h={'100%'} backgroundImage={"url('https://images.unsplash.com/photo-1549806938-7a892f7f03b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"} backgroundSize={'cover'}>  </Flex>
  </SwiperSlide>

  <SwiperSlide>
    <Flex w={'100%'} h={'80vh'} backgroundImage={"url('https://images.pexels.com/photos/6732304/pexels-photo-6732304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"} backgroundSize={'cover'}>  </Flex>
  </SwiperSlide>

   

  


      </Swiper>
    </Flex>
  );
}

export default MySlider


