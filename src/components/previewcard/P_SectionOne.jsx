import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MySlider from './MySlider'
import '../../App.css'
import { useSelector } from 'react-redux'

const P_SectionOne = () => {

  
  const previewCardData = useSelector((store)=>store.previewCardData)
  // console.log(previewCardData)

  const priorityBetweenBrideAndGroom = previewCardData?.eventDetails?.priorityBetweenBrideAndGroom;
  const brideFirstName = previewCardData?.brideDetails.firstName || 'Bride';
  const groomFirstName = previewCardData?.groomDetails.firstName || 'Groom';
  const eventDate = previewCardData?.eventDetails?.eventDate || 'Mon | Jul 18,2024';

  const formatDateString = (dateString) => {
    const date = new Date(dateString.replace('|', '').trim());
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const modifiedDate = formatDateString(eventDate)





  return (
    <Flex  position={'relative'} bg={'white'} w={'100%'} minH={['350px','350px','450px','480px']} h={'60vh'} justifyContent={'center'}  alignItems={['center','center','center','center']} className='custom-cursor'>
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
                        <Text fontSize={['16px','18px','20px','20px']} color={'gray.500'}>Join Us</Text>
                        <Text fontSize={['16px','18px','20px','20px']} color={'gray.500'}>On our Wedding Day!</Text>

                      </Flex>


                      <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','large','x-large','x-large']} p={'0px 5px'}>{priorityBetweenBrideAndGroom ==='bride'?`${brideFirstName} & ${groomFirstName}`:`${groomFirstName} & ${brideFirstName}`}</Text>
                      <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Text fontSize={['16px','18px','20px','20px']} color={'gray.500'}>Save the Date</Text>
                        <Text fontSize={['16px','18px','20px','20px']} color={'gray.500'}>{modifiedDate}</Text>

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

export default P_SectionOne
