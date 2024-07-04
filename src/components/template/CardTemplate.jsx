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
import DoorAnimation from './DoorAnimation'

const CardTemplate = () => {

  const params = useParams()
  const {url} = params;

  const dispatch = useDispatch()
  const liveCardData = useSelector((store)=>store.liveCardData)

  const eventDetails = liveCardData?.eventDetails?.eventFromDB;
  const engagementDetails = eventDetails?.subEvents?.engagementDetails
  const sangeetDetails = eventDetails?.subEvents?.sangeetDetails
  const haldiDetails = eventDetails?.subEvents?.haldiDetails

  const brideDetails = liveCardData?.eventDetails?.brideDetails;
  const groomDetails = liveCardData?.eventDetails?.groomDetails;
  const familyMembers = liveCardData?.eventDetails?.familyMembers?.familyDetailsArray;
  const photoGallery = liveCardData?.eventDetails?.photoGallery.photoGallery;
  


 
  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };
  
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
          <DoorAnimation/>
        </Flex>):(
          <Flex direction={'column'} w={'100%'} bg={'white'} className='custom-cursor'>
          <SectionOne/>
          <SectionTwo/>
         {
          (!isEmptyObject({engagementDetails})||!isEmptyObject({haldiDetails}) || !isEmptyObject({sangeetDetails}) ) &&(
            <SectionThree/>
           )
         }
          {
            photoGallery?.length > 0 && (
              <SectionFour/>
            )
          }
          {
            eventDetails?.addFamilyDetails && familyMembers?.length > 0 && (
              <ParentSection/>
            )
          }
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
