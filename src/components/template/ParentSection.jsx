import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import BrideOrGroom from './BrideOrGroom'
import CountdownTimer from './CountdownTimer'
import FlipBrideOrGroom from './FlipBrideOrGroom'
import RepeatParents from './RepeatParents'
import { useSelector } from 'react-redux'
 
const ParentSection = () => {
    
  const familyDetailsArray = useSelector((store)=>store?.liveCardData?.eventDetails?.familyMembers?.familyDetailsArray)
 const brideFamily = familyDetailsArray.filter(item=>item.side === 'bride')
 const groomFamily = familyDetailsArray.filter(item=>item.side === 'groom')
    const priorityBetweenFamily = useSelector((store)=>store?.liveCardData?.eventDetails?.eventFromDB?.priorityBetweenFamily)
    
  return (
    <Flex w={'100%'} className='sourceSerif_Script'  color={'gray.700'} justifyContent={'center'} alignItems={'center'} bg={'#faf5fa'}>
        <Flex w={['90%','90%','70%','70%']} direction={'column'} justifyContent={'center'} alignItems={'center'} p={'40px 0px'}>
        
            <Flex p={'20px 0px'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'10px'}>
            <Text  color={'gray.600'}   borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>The Heart and Soul of Our Families</Text> 
             </Flex>
            {
              priorityBetweenFamily === 'brideFamily'?(
                <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
                <RepeatParents memberArray={brideFamily} side={'Bride'} />
                <RepeatParents memberArray={groomFamily} side={'Groom'} />
                </Flex>
              ):(
                <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
                  <RepeatParents memberArray={groomFamily} side={'Groom'} />
                  <RepeatParents memberArray={brideFamily} side={'Bride'} />
                </Flex>                
              )
            }

            

            
        </Flex>
    </Flex>
  )
}

export default ParentSection
