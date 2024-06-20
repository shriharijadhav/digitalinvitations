import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEventCardLink, updateFormError } from '../../store/actions'
import { useParams } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, ArrowRightIcon } from '@chakra-ui/icons'

const E_Link = () => {
    const toast = useToast()

    const dispatch = useDispatch()
    const params = useParams();
    const {cardId} = params;
 
    const allCardsData = useSelector((store) => store.allCardsData)
    const cardDataArray = allCardsData.filter(c => c.cardId === Number(cardId))
    const cardData = cardDataArray[0]
    const previousCardLink = cardData.cardLink

    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)


    const handleChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        const filteredValue = inputValue.replace(/[^a-z0-9]/g, '');
        if(filteredValue.length > 0){
            dispatch(updateEventCardLink(e.target.name,filteredValue,cardId))
        }else{
            dispatch(updateEventCardLink(e.target.name,previousCardLink,cardId))
            toast({
                title: `Link name cannot be empty`,
                status: 'warning',
                position: 'bottom-center',
                isClosable: true,
              })
        }
    };




   return (
    <Flex w={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
        <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
            <Text>Event Type:<Text as={'span'} pl={'10px'}>{cardData.eventDetails.eventName}</Text></Text>
            <Text>Event Date:<Text as={'span'} pl={'10px'}>{cardData.eventDetails.date}</Text></Text>
        </Flex>
        <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
            <Text fontSize={'large'} fontWeight={500}>Choose link display name</Text>
            <Text></Text>
            <FormControl>
                <FormLabel>Link name</FormLabel>
                <Input value={cardData.cardLink} placeholder='Enter link name' name='cardLink' onChange={(e)=>{handleChange(e)}} />
                <FormHelperText>You can change this at any time with ease.</FormHelperText>
            </FormControl>
        </Flex>

        <Flex border={'1px solid grey'} w={'100%'} gap={'10px'}  p={'10px 10px'} borderRadius={'10px'}>
           <Flex  gap={'20px'}  w={'100%'} position={'relative'} justifyContent={'center'} alignItems={'center'} p={'10px 0px'}>
           <Button fontSize={'sm'}  isDisabled={currentPage> 1? false:true} display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}>
           <ArrowBackIcon/>
            Back
           </Button>
            <Text pr={'20px'} display={['none','none','flex','flex']}>Step {currentPage}/{totalPages}</Text>
           <Button fontSize={'sm'} isDisabled={currentPage<=totalPages? false:true}   display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}>
            Next
            <ArrowForwardIcon/>
           </Button>
           </Flex>
        </Flex>
    </Flex>
  )
}

export default E_Link
