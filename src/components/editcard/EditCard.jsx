import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
import E_Link from './E_Link';
import { useSelector } from 'react-redux';

const EditCard = () => {
    const params = useParams();
    const {cardId} = params;
    const currentPage =useSelector(store=>store.currentPage)
    const allCardsData = useSelector((store) => store.allCardsData)
    const cardDataArray = allCardsData.filter(c => c.cardId === cardId)
    const cardData = cardDataArray[0]
    const PageDisplay = () => {
        if(currentPage === 1) {
            return <E_Link/>
        }
    }


    
  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Flex w={['90%','90%','80%','80%']} justifyContent={'center'} alignItems={'center'} direction={'column'}> 
            <Flex w={'80%'}  justifyContent={'start'} p={'20px 0px'} position={'relative'} >
                <Link to={'/dashboard'}>
                <Button  display={'flex'} gap={'10px'}><IoArrowBack/>Dashboard</Button>
                </Link>
             </Flex>
            <Flex w={'80%'}  justifyContent={'center'}  position={'relative'} >
                <Text fontSize={'x-large'}>Edit Card</Text>
            </Flex>
            <Flex w={['90%','90%','60%','60%']} justifyContent={'center'}  p={'20px 0px'}>
                <Flex w={'100%'} p={'10px 0px'} justifyContent={'center'} alignItems={'center'}>
                {PageDisplay()}
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default EditCard
