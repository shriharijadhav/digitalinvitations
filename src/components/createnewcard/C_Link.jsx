import { ArrowBackIcon, ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, IconButton, Input, Select, Text, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { proceedToNextPage, saveEventAddress, saveEventAddress_Google_Map_link, saveEventCardLink, saveEventDate, savedEventName } from '../../store/actions'
import CustomDatePicker from './CustomDatePicker'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import TimePickerForEvent from './TimePickerForEvent'
import { Link } from '@chakra-ui/react'
 

const C_Link = () => {

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()


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
                <Text w={['100%','100%','30%','30%']}>Select Event Type :</Text>
                <Select w={['90%','80%','60%','60%']} placeholder='Select option' name='eventName' onChange={(e)=>{handleSelect(e.target.name,e.target.value)}}>
                        <option value='Wedding'>Wedding</option>
                </Select>            
            </Flex>
            <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
                <Text w={['100%','100%','30%','30%']}>Select Date: </Text>
                <Flex w={['90%','80%','60%','60%']} position={'relative'} >
                    <Box w={['90%','80%','60%','60%']} >
                        <Input placeholder='Click to select Date' value={eventDate} readOnly w={'100%'} onClick={()=>{setShowDatePicker(true)}}/>
                    </Box>
                    {
                        showDatePicker && (
                        <CustomDatePicker selected={selected} setSelected={setSelected} setShowDatePicker={setShowDatePicker}/>
                        )
                    }
                </Flex>            
            </Flex>
             
            {
                eventTime &&(
                    <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
                <Text w={['100%','100%','30%','30%']} pr={'20px'} >Selected Event Time:</Text>
                <Input value={eventTime} w={'max-content'} readOnly />            
            </Flex>
                )
            }
            <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        
            <Text   w={['100%','100%','30%','30%']}>Event time: </Text>
        
        <Flex w={['90%','80%','60%','60%']} position={'relative'} >
            <Box w={['90%','80%','60%','60%']} >
            <Button fontSize={'sm'} onClick={onOpen}>{eventTime?'Click to change Time':'Click to select Time'}</Button>
            </Box>
            <Flex w={'100%'}>
             <Modal  closeOnOverlayClick={false} size={['sm','md','lg','xl']} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent  >
             <Flex p={'10px 0px'}   w={'100%'} justifyContent={'center'} bg={'purple.500'}>
              <Flex w={'80%'} justifyContent={'space-between'} alignItems={'center'}>
              <Text fontSize={['large','large','x-large','x-large']}>Event Time</Text>
              <Button onClick={()=>{
                if(eventTime){
                    onClose()
                }else{
                    customToast('Please select Event time first.')
                }
              }}>Close</Button>
              </Flex>
             </Flex>
              <ModalBody w={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pb={6}>
              

                  <Flex w={'100%'}   justifyContent={'center'} alignItems={'center'} p={'20px 0px'}>
                  <TimePickerForEvent onClose={onClose} />

                  </Flex>
              </ModalBody>
    
              
            </ModalContent>
          </Modal>
            </Flex>
            
        </Flex>   
            </Flex>
            <Flex w={'100%'} direction={['column','column','row','row']} pt={'5px'} gap={['10px','10px','20px','20px']} justifyContent={'left'} alignItems={['start','start','start','start']}>
                <Text w={['100%','100%','30%','30%']}>Event Address:</Text>
                 <Textarea
                    w={['90%','80%','60%','60%']}
                    rounded={'lg'}
                    onChange={(e)=>{dispatch(saveEventAddress(e.target.value))}}
                    placeholder="Enter the detailed event address"
                    size="sm"
                />
            </Flex>

            <Flex w={'100%'} direction={['column','column','row','row']} pt={'5px'} gap={['10px','10px','20px','20px']} justifyContent={'left'} alignItems={['start','start','start','start']}>
            <Flex direction={'column'} w={['100%','100%','30%','30%']}>
            <Text >Google Map Location Link</Text>
            <Text >(Only embed link)</Text>
            </Flex>
            <Input
                    w={['90%','80%','60%','60%']}
                    rounded={'lg'}
                    onChange={(e)=>{dispatch(saveEventAddress_Google_Map_link(e.target.value))}}
                    placeholder="Enter the google map link for event address"
                    size="sm"
                />
            </Flex>
            <Flex w={'100%'} p={'5px 0px'}>
                <Link href='https://www.youtube.com/watch?v=R7m0e-7JCQk' title='Click for help' isExternal>
                    Don't know how to get embed link? Click here<ExternalLinkIcon mx='2px' />
                </Link>
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
