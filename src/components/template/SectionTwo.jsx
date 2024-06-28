import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import BrideOrGroom from './BrideOrGroom'
import CountdownTimer from './CountdownTimer'
 
const SectionTwo = () => {
    
    const dateFromDB = "2024-07-09T18:30:00.000Z"
    const targetDate = dateFromDB.split('T')[0];
    const targetTime = "12:32 PM";

    function combineDateAndTime(dateStr, timeStr) {
        // Parse the date
        const [year, month, day] = dateStr.split('-').map(Number);
    
        // Parse the time
        const [time, period] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
    
        if (period === 'PM' && hours !== 12) {
            hours += 12;
        } else if (period === 'AM' && hours === 12) {
            hours = 0;
        }
    
        // Create the date object in IST
        const date = new Date(year, month - 1, day, hours, minutes);
    
        return date;
    }
    
   
    const targetDateTime = combineDateAndTime(targetDate, targetTime);
     
    
  return (
    <Flex w={'100%'}  color={'black'} justifyContent={'center'} alignItems={'center'} minH={'80vh'} >
        <Flex w={['90%','90%','80%','80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} p={'40px 0px'}>
            <Flex w={'100%'} direction={['column','column','row','row']} justifyContent={'center'} p={'30px 0px'} gap={'30px'} alignItems={'center'}>
                <Flex  w={'100%'}>
                    <BrideOrGroom/>
                </Flex>
                <Flex   w={'100%'} justifyContent={'center'} alignItems={'center'}>
                    <Flex direction={'column'} w={'90%'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
                    <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>Save the Date</Text>
                        <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Text  fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']}>Pratham & Swati</Text>
                        <Text fontSize={['medium','large','larger','larger']}>are getting married on</Text>
                        <Text fontSize={['medium','large','larger','larger']}>26.09.2024</Text></Flex>
                    </Flex>
                </Flex>
                <Flex  w={'100%'}>
                    <BrideOrGroom/>
                </Flex>
            </Flex>
             <Flex w={'100%'}  justifyContent={'center'} alignItems={'center'}>
                <CountdownTimer targetDateTime={targetDateTime} />
            </Flex>
        </Flex>
    </Flex>
  )
}

export default SectionTwo
