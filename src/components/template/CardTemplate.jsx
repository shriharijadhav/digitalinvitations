import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MySlider from './MySlider'
import '../../App.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import Gallery from './Gallery'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import ScrollToTopButton from './scrollToTop'
import FlipBrideOrGroom from './FlipBrideOrGroom'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'
import ParentSection from './ParentSection'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { makeApiCallToFetchCardData } from '../../store/actions'

const CardTemplate = () => {

  const params = useParams()
  const {url} = params;

  const dispatch = useDispatch()
  const liveCardData = useSelector((store)=>store.liveCardData)

  const eventDetails = liveCardData?.eventDetails?.eventFromDB;
  const brideDetails = liveCardData?.eventDetails?.brideDetails;
  const groomDetails = liveCardData?.eventDetails?.groomDetails;
  const familyMembers = liveCardData?.eventDetails?.familyMembers?.familyDetailsArray;
  const photoGallery = liveCardData?.eventDetails?.photoGallery.photoGallery;
  const engagementDetails = liveCardData?.eventDetails?.subEvents?.engagementDetails;
  const sangeetDetails = liveCardData?.eventDetails?.subEvents?.sangeetDetails;
  const haldiDetails = liveCardData?.eventDetails?.subEvents?.haldiDetails;
  const audioUrl = liveCardData?.eventDetails?.audioUrl

  console.log(eventDetails)
  
  useEffect(() => {
    if(url){
      dispatch(makeApiCallToFetchCardData(url))
    }
  }, []);
  return (

    <Flex direction={'column'} w={'100%'} bg={'white'} className='custom-cursor'>
    
    {
      !liveCardData ?(
        <Flex direction={'column'} w={'100%'} bg={'white'} className='custom-cursor'>
        <Text color={'black'}>Loading...</Text>
        </Flex>):(
          <Flex direction={'column'} w={'100%'} bg={'white'} className='custom-cursor'>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <ParentSection/>
          {/*<SectionFive/>*/}
          <SectionSix/>
          <SectionSeven/>
          <ScrollToTopButton/>
        </Flex>
        )
    }
    
    </Flex>

    

   

  )
}

export default CardTemplate
