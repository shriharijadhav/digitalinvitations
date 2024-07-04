import { Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import P_SectionOne from './P_SectionOne'
import P_SectionTwo from './P_SectionTwo'
import { CloseIcon } from '@chakra-ui/icons'
import P_SectionThree from './P_SectionThree'
import P_SectionFour from './P_SectionFour'
import P_ParentSection from './P_ParentSection'
import P_SectionSix from './P_SectionSix'
import P_ScrollToTopButton from './P_ScrollToTopButton'

const PreviewCardTemplate = ({setShowCardPreview}) => {
    const previewCardData = useSelector((store)=>store.previewCardData)
    const eventDetails = previewCardData.eventDetails
    const photoGallery = previewCardData.photoGallery
    const familyMembers = eventDetails?.familyDetailsArray


  return (
     <Flex  direction={'column'} w={'100%'} bg={'white'} color={'black'} className='custom-cursor' overflowY={'scroll'}  >
     <Flex position={'sticky'} top={0} zIndex={1000} w={'100%'} bg={'purple.400'} color={'white'} justifyContent={'space-between'} alignItems={'center'} p={'10px 20px'}>
        <Text fontSize={'large'} fontWeight={'500'}>Card Preview </Text>
        <IconButton onClick={()=>{setShowCardPreview(false)}} icon={<CloseIcon cursor={'pointer'} />} />
     </Flex>
    



    {
      !previewCardData ?(
        <Flex direction={'column'} w={'100%'} bg={'white'} className='custom-cursor'>
        <Text color={'black'}>Loading...</Text>
        </Flex>):(
          <Flex direction={'column'} w={'100%'} bg={'white'} className='custom-cursor'>
          <P_SectionOne/>
          <P_SectionTwo/>
          
            {/*<P_SectionThree/>*/}
            
          {
            photoGallery?.length > 0 && (
              <P_SectionFour/>
            )
          }
          {
            familyMembers?.length > 0 && (
              <P_ParentSection/>
            )
          }
          
          <P_SectionSix/>
         {/* <SectionSeven/>*/}
          <P_ScrollToTopButton/>
        </Flex>
        )
    }
    
    </Flex>
  )
}

export default PreviewCardTemplate
