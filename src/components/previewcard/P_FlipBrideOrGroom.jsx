import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../../App.css'
import { useSelector } from 'react-redux';

const P_FlipBrideOrGroom = ({singleMember}) => {

  const previewCardData = useSelector((store)=>store.previewCardData)

   const eventDate = previewCardData.eventDetails.eventDate
  const eventTime = previewCardData.eventDetails.eventTime
   const formatDate = (dateString) => {
    const months = {
      Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April',
      May: 'May', Jun: 'June', Jul: 'July', Aug: 'August',
      Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December'
    };
  
    // Split the dateString into parts
    // const parts = dateString.split(' | ')[1].split(' ');
    // const month = months[parts[0]];
    // const day = parts[1].replace(',', '');
    // const year = parts[2];
  
    const parts =dateString.split(' | ')[1].split(' ')
    const month = months[parts[0]]
    const day = (parts[1].replace(',', '')).padStart(2,'0')
    const year = parts[2]

    return `${day} ${month}, ${year}`
   
    // Return the formatted date
    // return `${day} ${month}, ${year}`;
}


const modifiedDate = formatDate(eventDate)
  return (
    <Flex
      w={'100%'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'20px'}
      pb={'20px'}
    >
      <Flex
        className="flip-container"
        position={'relative'}
        zIndex={20}
        w={['200px', '220px', '250px', '280px']}
        h={['200px', '220px', '250px', '280px']}
      >
        <Flex className="flipper">
          <Flex className="front" position={'relative'} zIndex={20} w={'100%'} h={'100%'}>
            <Flex
              border={'1px solid white'}
              position={'absolute'}
              h={['45px', '50px', '58px', '64px']}
              right={0}
              top={0}
              zIndex={10}
              borderColor={'red.400'}
              transform="rotate(45deg)"
              transformOrigin={'top right'}
            ></Flex>
            <Flex
              border={'1px solid white'}
              position={'absolute'}
              h={['45px', '50px', '58px', '64px']}
              left={0}
              bottom={0}
              zIndex={10}
              borderColor={'red.400'}
              transform="rotate(45deg)"
              transformOrigin={'bottom left'}
            ></Flex>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              position={'absolute'}
              w={'100%'}
              h={'100%'}
              bg={'gray'}
              outline={'1px solid white'}
              zIndex={20}
              outlineOffset={'-8px'}
              borderRadius={'full'}
              backgroundImage={`url(${URL.createObjectURL(singleMember.actualImage)})`}
              backgroundSize={'cover'}
              overflow={'hidden'}
            >
              <Flex
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="transparent"
                borderRadius="full"
                outline="1px solid white"
                outlineOffset="-5px"
                zIndex="1"
              ></Flex>
              <Flex
                w={'95%'}
                h={'95%'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                borderRadius={'full'}
              >
                <Flex
                  w={'95%'}
                  overflow={'hidden'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  direction={'column'}
                  gap={['10px', '10px', '20px', '20px']}
                ></Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            className="back"
            justifyContent={'center'}
            alignItems={'center'}
            bg={'gray.100'}
            borderRadius={'full'}
            position={'absolute'}
            w={'100%'}
            h={'100%'}
            backfacevisibility={'hidden'}
            direction={'column'}
            bgColor={'purple.200'}
            textAlign={'center'}
            gap={'10px'}
            p={'10px'}
          >
            <Text fontSize={['sm','sm','md','lg']}>Join us for a day of love, laughter, and new beginnings.</Text>
            <Text fontSize={['sm','sm','md','lg']} pt={['0px','0px','5px','5px']}>{modifiedDate} | {eventTime}</Text>
            <Text fontSize={['sm','sm','md','lg']} pb={['0px','0px','5px','5px']}></Text>
            <Text fontSize={['sm','sm','md','lg']}>Please save the Date!</Text>

          </Flex>
        </Flex>
      </Flex>
      <Flex p={'5px 0px'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <Text fontSize={['large', 'large', 'large', 'x-large']} fontWeight={'500'}>{singleMember.firstName} {singleMember.lastName}</Text>
      <Text fontSize={['medium', 'medium', 'medium', 'large']}>{singleMember.relationship}</Text>
        
      </Flex>
    </Flex>
  );
};

export default P_FlipBrideOrGroom;
