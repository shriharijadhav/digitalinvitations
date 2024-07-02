import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import BrideOrGroom from './BrideOrGroom'
import CountdownTimer from './CountdownTimer'
import { useSelector } from 'react-redux'
 
const SectionTwo = () => {



    const liveCardData = useSelector((store)=>store.liveCardData)
    const priorityBetweenBrideAndGroom = liveCardData?.eventDetails?.eventFromDB?.priorityBetweenBrideAndGroom;
 
    const brideDetails = liveCardData?.eventDetails?.brideDetails
    const brideFirstName = brideDetails?.firstName
    const brideLastName = brideDetails?.lastName
    const brideImageLink = brideDetails?.brideImageLink
    const brideSocialLinkArray = [
        brideDetails.instagramLink,brideDetails.facebookLink,brideDetails.youtubeLink
    ]

    const groomDetails = liveCardData?.eventDetails?.groomDetails;
    const groomFirstName = groomDetails?.firstName
    const groomLastName = groomDetails?.lastName
    const groomImageLink = groomDetails?.groomImageLink
    const groomSocialLinkArray = [
        groomDetails.instagramLink,groomDetails.facebookLink,groomDetails.youtubeLink
    ]

    const eventDate = liveCardData?.eventDetails?.eventFromDB?.eventDate;
    const formatDateString = (dateString) => {
        const date = new Date(dateString.replace('|', '').trim());
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      };
    
    const modifiedDate = formatDateString(eventDate) || '27.12.2015';
    
    
    const convertDateFormat = (dateString) => {
        // Define a map for month abbreviations to numbers
        const monthMap = {
          Jan: '01',
          Feb: '02',
          Mar: '03',
          Apr: '04',
          May: '05',
          Jun: '06',
          Jul: '07',
          Aug: '08',
          Sep: '09',
          Oct: '10',
          Nov: '11',
          Dec: '12'
        };
      
        // Extract the parts of the date string
        const [, monthStr, day, year] = dateString.split(/[\s|,]+/);
      
        // Convert month abbreviation to number
        const month = monthMap[monthStr];
      
        // Ensure day is two digits
        const dayFormatted = day.padStart(2, '0');
      
        // Format the date as YYYY-MM-DD
        return `${year}-${month}-${dayFormatted}`;
    };

    
    
    const dateFromDB = convertDateFormat(eventDate)
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
            <Flex w={'100%'} direction={priorityBetweenBrideAndGroom === 'bride'?['column','column','row','row']:['column-reverse','column-reverse','row-reverse','row-reverse']} justifyContent={'center'} p={'30px 0px'} gap={'30px'} alignItems={'center'}>
                <Flex  w={'100%'}>
                    <BrideOrGroom person={'Bride'} fullName={`${brideFirstName} ${brideLastName}`} socialLinkArray={brideSocialLinkArray} imageUrl={brideImageLink}/>
                </Flex>
                <Flex   w={'100%'} justifyContent={'center'} alignItems={'center'}>
                    <Flex direction={'column'} w={'90%'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
                    <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>Save the Date</Text>
                        <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Text  fontWeight={'500'} fontSize={['large','x-large','large','x-large']}>{priorityBetweenBrideAndGroom ==='bride'?`${brideFirstName} & ${groomFirstName}`:`${groomFirstName} & ${brideFirstName}`}</Text>
                        <Text fontSize={['medium','large','larger','larger']}>are getting married on</Text>
                        <Text fontSize={['medium','large','larger','larger']}>{modifiedDate}</Text></Flex>
                    </Flex>
                </Flex>
                <Flex  w={'100%'}>
                    <BrideOrGroom person={'Groom'} fullName={`${groomFirstName} ${groomLastName}`} socialLinkArray={groomSocialLinkArray}   imageUrl={groomImageLink}/>
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
