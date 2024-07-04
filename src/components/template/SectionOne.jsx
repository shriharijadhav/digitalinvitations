import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MySlider from './MySlider'
import '../../App.css'
import { useSelector } from 'react-redux'

const SectionOne = () => {

  
  const liveCardData = useSelector((store)=>store.liveCardData)

  const priorityBetweenBrideAndGroom = liveCardData?.eventDetails?.eventFromDB?.priorityBetweenBrideAndGroom;
  const brideFirstName = liveCardData?.eventDetails?.brideDetails.firstName || 'Bride';
  const groomFirstName = liveCardData?.eventDetails?.groomDetails.firstName || 'Groom';
  const eventDate = liveCardData?.eventDetails?.eventFromDB?.eventDate;

  const formatDateString = (dateString) => {
    const date = new Date(dateString.replace('|', '').trim());
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const modifiedDate = formatDateString(eventDate) || '27.12.2015';





  return (
    <Flex position={'relative'} bg={'white'} w={'100%'} h={'85vh'} justifyContent={'center'}  alignItems={['center','center','center','center']} className='custom-cursor'>
        <Flex w={'max-content'}  justifyContent={'center'} alignItems={'center'} p={'20px 0px'} >
            <Flex position={'relative'} className='scale-animation'  zIndex={20} w={['220px','250px','280px','300px']} h={['220px','250px','280px','300px']}   >
              <Flex border={'1px solid white'} position={'absolute'} h={['38px','43px','50px','54px']} right={0} top={0}  zIndex={10}  transform="rotate(45deg)"   transformOrigin={'top right'}></Flex>
              <Flex border={'1px solid white'} position={'absolute'} h={['38px','43px','50px','54px']} left={0} bottom={0}  zIndex={10}  transform="rotate(45deg)"   transformOrigin={'bottom left'}></Flex>
              <Flex justifyContent={'center'} alignItems={'center'} position={'absolute'} w={'100%'} h={'100%'} bg={'white'} outline={'1px solid white'} zIndex={20} outlineOffset={'8px'} borderRadius={'full'}>
                  <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    bg="transparent"
                    borderRadius="full"
                    outline="1px solid white"
                    outlineOffset="5px"
                    zIndex="1"
                    ></Flex>
                  <Flex w={'95%'} h={'95%'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} borderRadius={'full'} >
                    <Flex w={'95%'} overflow={'hidden'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={['10px','10px','20px','20px']} >
                      <Flex className='custom-cursor' direction={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Text fontSize={['medium','medium','larger','x-large']} className='sourceSerif_Script' color={'gray.600'}>Join Us</Text>
                        <Text fontSize={['medium','medium','larger','larger']} className='sourceSerif_Script' color={'gray.600'}>On our Wedding Day!</Text>

                      </Flex>


                      <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['x-large','x-large','x-large','xx-large']} p={'0px 5px'} className='metal_Script'>{priorityBetweenBrideAndGroom ==='bride'?`${brideFirstName} & ${groomFirstName}`:`${groomFirstName} & ${brideFirstName}`}</Text>
                      <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Text fontSize={['medium','medium','larger','x-large']} className='sourceSerif_Script' color={'gray.600'} >Save the Date</Text>
                        <Text fontSize={['medium','medium','larger','larger']} className='sourceSerif_Script' color={'gray.600'}>{modifiedDate}</Text>

                      </Flex>

                    </Flex>
                  </Flex>
              </Flex>
            </Flex>
            
        </Flex>
        <Flex position={'absolute'} top={0}  h={'100%'} w={'100%'} >
        <MySlider />
        </Flex>
    </Flex>

  )
}

export default SectionOne
