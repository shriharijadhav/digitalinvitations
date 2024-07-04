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

const SectionThree = () => {
    

    const liveCardData = useSelector((store)=>store.liveCardData)
    const sangeetDetails = liveCardData?.eventDetails?.subEvents?.sangeetDetails;
    const haldiDetails = liveCardData?.eventDetails?.subEvents?.haldiDetails;
    const engagementDetails = liveCardData?.eventDetails?.subEvents?.engagementDetails;

    const isEmptyObject = (obj) => {
      return Object.keys(obj).length === 0 && obj.constructor === Object;
    };


  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} bg={'#faf5fa'} minH={'80vh'} pb={'20px'}>
        <Flex w={'80%'} justifyContent={'center'} alignItems={'center'} direction={'column'} p={'30px 0px'} gap={'20px'}>
            <Flex p={'20px 0px'}>
            <Text borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.700'} fontWeight={'500'}  fontSize={['larger','x-large','x-large','xx-large']} className='dancing_Script' p={'0px 5px'} color={'gray.700'}>Occasions</Text>            </Flex>
            <Flex p={'20px 0px'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Grid className='sourceSerif_Script'   w={'100%'} templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)']} gridGap={'50px'}  gridTemplateRows={'auto'}>
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
            </Grid>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default SectionThree
