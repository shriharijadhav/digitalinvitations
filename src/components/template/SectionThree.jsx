import { Button, ButtonGroup, Divider, Flex, Grid, GridItem, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
 import { IoLocationOutline } from "react-icons/io5";


 import { IoMdTime } from "react-icons/io";
import SingleOccasion from './SingleOccasion';

const SectionThree = () => {
    const eventName = 'Engagement';
    const cardImageUrl = "https://images.pexels.com/photos/4091280/pexels-photo-4091280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    const eventTime = "8:00 PM";
    const eventDate = "08 July, 2024"
    const eventAddress = "Same as Wedding"
  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} bg={'#faf5fa'} minH={'80vh'} pb={'20px'}>
        <Flex w={'80%'} justifyContent={'center'} alignItems={'center'} direction={'column'} p={'30px 0px'} gap={'20px'}>
            <Flex p={'20px 0px'}>
            <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>Occasions</Text>            </Flex>
            <Flex p={'20px 0px'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Grid   w={'100%'} templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)']} gridGap={'50px'}  gridTemplateRows={'auto'}>
               <SingleOccasion eventName={eventName} cardImageUrl={cardImageUrl} eventTime={eventTime} eventDate={eventDate} eventAddress={eventAddress} />     
               <SingleOccasion eventName={eventName} cardImageUrl={cardImageUrl} eventTime={eventTime} eventDate={eventDate} eventAddress={eventAddress} />     
               <SingleOccasion eventName={eventName} cardImageUrl={cardImageUrl} eventTime={eventTime} eventDate={eventDate} eventAddress={eventAddress} />     
                    
            </Grid>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default SectionThree
