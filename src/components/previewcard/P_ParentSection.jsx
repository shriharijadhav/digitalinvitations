import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import P_RepeatParents from './P_RepeatParents'
import { useSelector } from 'react-redux'
 
const P_ParentSection = () => {
  const previewCardData = useSelector((store)=>store.previewCardData)
  const priorityBetweenFamily = previewCardData?.evenDetails?.priorityBetweenFamily
  const familyDetailsArray = previewCardData?.eventDetails?.familyDetailsArray

 const brideFamily = familyDetailsArray.filter(item=>item.side === 'bride')
 const groomFamily = familyDetailsArray.filter(item=>item.side === 'groom')
//     const priorityBetweenFamily = useSelector((store)=>store?.liveCardData?.eventDetails?.eventFromDB?.priorityBetweenFamily)
    
  return (
    <Flex w={'100%'}  color={'black'} justifyContent={'center'} alignItems={'center'} bg={'#faf5fa'}>
        <Flex w={['90%','90%','70%','70%']} direction={'column'} justifyContent={'center'} alignItems={'center'} p={'40px 0px'}>
        
            <Flex p={'20px 0px'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'10px'}>
            <Text  color={'gray.600'}   borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>The Heart and Soul of Our Families</Text> 
             </Flex>
            {
              priorityBetweenFamily === 'brideFamily'?(
                <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
                <P_RepeatParents memberArray={brideFamily} side={'Bride'} />
                <P_RepeatParents memberArray={groomFamily} side={'Groom'} />
                </Flex>
              ):(
                <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
                  <P_RepeatParents memberArray={groomFamily} side={'Groom'} />
                  <P_RepeatParents memberArray={brideFamily} side={'Bride'} />
                </Flex>                
              )
            }

            

            
        </Flex>
    </Flex>
  )
}

export default P_ParentSection
