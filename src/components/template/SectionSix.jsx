import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Gallery from './Gallery'
import VideoGallery from './VideoGallery'
import GoogleMap from './GoogleMap'
import { IoLocationOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const SectionSix = () => {

  

  const eventAddress = useSelector(store=>store?.liveCardData?.eventDetails?.eventFromDB?.eventAddress)
  const eventAddressGoogleMapLink = useSelector(store=>store?.liveCardData?.eventDetails?.eventFromDB?.eventAddressGoogleMapLink)
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

export default SectionSix
