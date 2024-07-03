import { Button, ButtonGroup, Divider, Flex, Grid, GridItem, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
 import { IoLocationOutline } from "react-icons/io5";
 import { IoMdTime } from "react-icons/io";
import SingleOccasion from './SingleOccasion';
import { useSelector } from 'react-redux';

import default_engagement from '../../assets/images/default_engagement.jpg'
import default_sangeet from '../../assets/images/default_sangeet.jpg'
import default_haldi from '../../assets/images/default_haldi_.jpg'

const P_SectionThree = () => {
    

    const previewCardData = useSelector((store)=>store.previewCardData)
    const isEngagementAddressSameAsWedding = previewCardData?.eventDetails?.isEngagementAddressSameAsWedding
    const isSangeetAddressSameAsWedding = previewCardData?.eventDetails?.isSangeetAddressSameAsWedding
    const isHaldiAddressSameAsWedding = previewCardData?.eventDetails?.isHaldiAddressSameAsWedding
    
    
    let tempSangeetDetails = previewCardData?.eventDetails?.subEvents?.sangeetDetails;
    if(isSangeetAddressSameAsWedding){
      tempSangeetDetails.sangeetAddress = "Same as Wedding"
    }
    const sangeetDetails = tempSangeetDetails;

    let tempEngagementDetails = previewCardData?.eventDetails?.subEvents?.engagementDetails;
    if(isEngagementAddressSameAsWedding){
      tempEngagementDetails.engagementAddress = "Same as Wedding"
    }
    const engagementDetails = tempEngagementDetails;

    let tempHaldiDetails = previewCardData?.eventDetails?.subEvents?.haldiDetails;
    if(isHaldiAddressSameAsWedding){
      tempHaldiDetails.haldiAddress = "Same as Wedding"
    }
    const haldiDetails = tempHaldiDetails;


 
    const isEmptyObject = (obj) => {
      const excludedKeys = ['haldiAddress', 'engagementAddress', 'sangeetAddress'];
    
      for (const key in obj) {
        if (!excludedKeys.includes(key) && obj[key]) {
          return false;
        }
      }
    
      return true;
    };
    

    
  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} bg={'#faf5fa'} pb={'20px'}>
        <Flex w={'80%'} justifyContent={'center'} alignItems={'center'} direction={'column'} p={'30px 0px'} gap={'20px'}>
            <Flex p={'20px 0px'}>
            <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>Occasions</Text>            </Flex>
            <Flex p={'20px 0px'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
           
           
            
            {<Grid   w={'100%'} templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)']} gridGap={'50px'}  gridTemplateRows={'auto'}>
              {
                !isEmptyObject(engagementDetails) && (
                  <SingleOccasion eventName={'Engagement ceremony'} cardImageUrl={default_engagement} eventTime={engagementDetails.engagementTime} eventDate={engagementDetails.engagementDate} eventAddress={engagementDetails.engagementAddress} />     
                )
              }
              {
                !isEmptyObject(sangeetDetails) && (
                  <SingleOccasion eventName={'Sangeet ceremony'} cardImageUrl={default_sangeet} eventTime={sangeetDetails.sangeetTime} eventDate={sangeetDetails.sangeetDate} eventAddress={sangeetDetails.sangeetAddress} />     
                )
              }
              {
                !isEmptyObject(haldiDetails) && (
                  <SingleOccasion eventName={"Haldi ceremony"} cardImageUrl={default_haldi} eventTime={haldiDetails.haldiTime} eventDate={haldiDetails.haldiDate} eventAddress={haldiDetails.haldiAddress} />     
                )
              }
            </Grid>}
            </Flex>
        </Flex>
    </Flex>
  )
}

export default P_SectionThree
