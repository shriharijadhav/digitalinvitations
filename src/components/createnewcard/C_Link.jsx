import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Select, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { proceedToNextPage, saveEventCardLink, saveEventDate, savedEventName } from '../../store/actions'
import CustomDatePicker from './CustomDatePicker'

const C_Link = () => {

    const toast = useToast()

    const [showDatePicker,setShowDatePicker] = useState(false)
    const [selected, setSelected] = useState();
    const [formattedDate, setFormattedDate] = useState('');


    const tempNewCardData = useSelector((store) => store.tempNewCardData)
    const cardLink = tempNewCardData.cardLink;
    const eventName = tempNewCardData.eventDetails.eventName;
    const eventDate = tempNewCardData.eventDetails.eventDate;
    const eventTime = tempNewCardData.eventDetails.eventTime;

    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)

    const dispatch = useDispatch()
    const handleLinkChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        const filteredValue = inputValue.replace(/[^a-z0-9]/g, '');
        dispatch(saveEventCardLink(e.target.name,filteredValue))
    };

    const handleSelect = (fieldName,value) => {
        if(value){
            dispatch(savedEventName(fieldName,value))
        }else{
            toast({
                title: `Please select a valid event type.`,
                status: 'warning',
                position: 'bottom-center',
                isClosable: true,
              })
        }
    };

    const formatDate = (dateString) =>{
        // Create a new Date object from the input string
        const date = new Date(dateString);
    
        // Define arrays for month and day names
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        // Get the day, month, and date components
        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
    
        // Format the output string
        return `${dayName} | ${monthName} ${day}, ${year}`;
    }

    const customToast = (message)=>{
        toast({
            title: `${message}`,
            status: 'warning',
            position: 'bottom-center',
            isClosable: true,
          })
    }
    const linkPage_handleNext = () => {
        if(eventDate && cardLink && eventName){
        // proceed to next page - update currentPage value
        //    save data to database
        // upon successful save . re-fetch updated data from   database

        dispatch(proceedToNextPage())

        }
        else if(!eventName){
            customToast('Event Type cannot be empty')
        }else if(!eventDate){
            customToast('Event Date cannot be empty')
        }else{
            customToast('Event Card Link cannot be empty')
        }
    }


    useEffect(() =>{
        if(selected){
            const newString = formatDate(selected);
            setFormattedDate(newString);
            dispatch(saveEventDate(newString,selected));
        }
  

    },[selected])
  return (
    <Flex w={['100%','90%','90%','80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
        <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
            <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
                <Text w={['100%','100%','40%','40%']}>Select Event Type :</Text>
                <Select w={['90%','80%','60%','60%']} placeholder='Select option' name='eventName' onChange={(e)=>{handleSelect(e.target.name,e.target.value)}}>
                        <option value='Wedding'>Wedding</option>
                </Select>            
            </Flex>
            <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
                <Text w={['100%','100%','40%','40%']}>Select Date: </Text>
                <Flex w={['90%','80%','60%','60%']} position={'relative'} >
                    <Box w={['90%','80%','60%','60%']} >
                        <Input placeholder='Select Date' value={eventDate} readOnly w={'100%'} onClick={()=>{setShowDatePicker(true)}}/>
                    </Box>
                    {
                        showDatePicker && (
                        <CustomDatePicker selected={selected} setSelected={setSelected} setShowDatePicker={setShowDatePicker}/>
                        )
                    }
                </Flex>            
            </Flex>
        </Flex>
        <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
            <Text fontSize={'large'} fontWeight={500}>Choose link display name</Text>
            <Text fontSize={'sm'} color={'gray'}>(You can change this at any time with ease.)</Text>
            <FormControl>
                <FormLabel>Card Link name</FormLabel>
                <Input value={cardLink} placeholder='Enter card link name here' name='cardLink' onChange={(e)=>{handleLinkChange(e)}} />
                <FormHelperText></FormHelperText>
                <FormHelperText>Only lowercase alphabets & Numbers are allowed.</FormHelperText>
            </FormControl>
        </Flex>

        <Flex border={'1px solid grey'} w={'100%'} gap={'10px'}  p={'10px 10px'} borderRadius={'10px'}>
           <Flex  gap={'20px'}  w={'100%'} position={'relative'} justifyContent={'space-between'} alignItems={'center'} p={'10px 0px'}>
           <Button fontSize={'sm'}  isDisabled={currentPage> 1? false:true} display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}>
           <ArrowBackIcon/>
            Back
           </Button>
            <Text pr={'20px'} display={['none','none','flex','flex']}>Step {currentPage}/{totalPages}</Text>
           <Button fontSize={'sm'} isDisabled={currentPage<=totalPages? false:true}   display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}
           
           onClick={linkPage_handleNext}
           >
            Next
            <ArrowForwardIcon/>
           </Button>
           </Flex>
        </Flex>
    </Flex>
  )
}

export default C_Link
