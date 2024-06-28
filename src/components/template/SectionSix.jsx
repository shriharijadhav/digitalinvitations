import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Gallery from './Gallery'
import VideoGallery from './VideoGallery'
import GoogleMap from './GoogleMap'
import { IoLocationOutline } from 'react-icons/io5'

const SectionSix = () => {
    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.7692919248277!2d144.95373541531797!3d-37.81362797975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb0f835e8b8a460c8!2sGoogle!5e0!3m2!1sen!2sus!4v1592096451920!5m2!1sen!2sus";

  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} minH={'90vh'}>
    <Flex w={'80%'} justifyContent={'center'} alignItems={'center'} direction={'column'} p={'30px 0px'} gap={'20px'}>
        <Flex pt={'20px'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} direction={'column'} gap={'10px'}>
        <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>Event Address</Text> 
            <Flex justifyContent={'center'} alignItems={'baseline'} gap={'5px'} >
            <IoLocationOutline size={'20px'} />
            <Text pt={'20px'} fontSize={'large'}>Shrinath Palace, old Akluj road, Isbavi , Pandharpur</Text>
            </Flex>
        </Flex>
        <Flex p={'25px 0px'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
        <GoogleMap mapUrl={googleMapsEmbedUrl} />
        </Flex>
    </Flex>
</Flex>
  )
}

export default SectionSix
