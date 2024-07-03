import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import GoogleMap from './GoogleMap'
import { IoLocationOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const P_SectionSix = () => {

  
  const previewCardData = useSelector((store)=>store.previewCardData)

  const eventAddress = previewCardData.eventDetails.eventAddress
  const eventAddressGoogleMapLink = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.159102640729!2d75.30998757490043!3d17.68994259401927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc417fd3db3e443%3A0xb3f139625e8e9301!2sShrinath%20Palace%20Mangal%20Karyalaya!5e0!3m2!1sen!2sin!4v1720010548522!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  const googleMapsEmbedUrl =  eventAddressGoogleMapLink.split('"')[1]
 
  

  return (
    <Flex w={'100%'} color={'black'} justifyContent={'center'} alignItems={'center'} minH={'90vh'}>
    <Flex w={'80%'} justifyContent={'center'} alignItems={'center'} direction={'column'} p={'20px 0px'} gap={'10px'}>

        <Flex pt={'20px'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} direction={'column'} gap={'10px'}>
        <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>Event Address</Text> 
            <Flex justifyContent={'center'} alignItems={'baseline'} gap={'5px'} >
            <IoLocationOutline size={'20px'} />
            <Text pt={'20px'} fontWeight={'500'}  fontSize={['large','large','x-large','x-large']}>{eventAddress}</Text>
            </Flex>
        </Flex>
        <Flex p={'20px 0px'} w={'100%'} gap={'20px'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
        <Text  fontSize={['medium','medium','large','large']} fontStyle={'italic'}>Get directions by clicking on the map below.</Text>
        <GoogleMap mapUrl={googleMapsEmbedUrl} />
        </Flex>
    </Flex>
</Flex>
  )
}

export default P_SectionSix
