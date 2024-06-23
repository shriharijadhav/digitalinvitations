import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, Grid, GridItem, Input, ListItem, Radio, RadioGroup, Select, Text, Textarea, UnorderedList, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { makeHaldiAddressSameAsWedding, previousPage, proceedToNextPage, saveHaldiAddress, saveHaldiDate, saveSangeetTime, toggleAddHaldiDetails } from '../../store/actions'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  import { FaCircleCheck } from "react-icons/fa6";
import CustomDatePickerForHaldi from './CustomDatePickerForHaldi'
import TimePickerForHaldi from './TimePickerForHaldi'
 
const C_HaldiDetails = () => {



    const haldiAddressRef = useRef()
    const toast = useToast()
    const [showDatePickerForHaldi,setShowDatePickerForHaldi] = useState(false)
    const [selectedForHaldi, setSelectedForHaldi] = useState();


    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('1')
    const [formattedDateForHaldi, setFormattedDateForHaldi] = useState('');

    const haldiDetails = useSelector((store) => store.tempNewCardData.eventDetails.subEvents.haldiDetails)
    const haldiDate = haldiDetails.haldiDate 
    const haldiTime = haldiDetails.haldiTime
    const raw_haldiDate = haldiDetails.raw_haldiDate
    const haldiAddress = haldiDetails.haldiAddress

    
 
    const isHaldiAddressSameAsWedding = useSelector((store) => store.tempNewCardData.eventDetails.isHaldiAddressSameAsWedding)
    const addHaldiDetails = useSelector((store) => store.tempNewCardData.eventDetails.addHaldiDetails)

    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)

    const customToast = (message)=>{
        toast({
            title: `${message}`,
            status: 'warning',
            position: 'bottom-center',
            isClosable: true,
          })
    }

    const linkPage_handleNext = () => {
        if(value){
        // proceed to next page - update currentPage value
        //    save data to database
        // upon successful save . re-fetch updated data from   database

        dispatch(proceedToNextPage())

        }
        else if(!value){
            customToast('Please select a valid template')
        }
    }

    const linkPage_handlePrevious = () => {
         
        dispatch(previousPage())

        
    }
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

    const handleCheck = () => {
        if(isHaldiAddressSameAsWedding){
            dispatch(makeHaldiAddressSameAsWedding(false))
        }else{
            dispatch(makeHaldiAddressSameAsWedding(true))
            dispatch(saveHaldiAddress(''))
            haldiAddressRef.current.value = '';
            // clear the address 
        }
    }

    const handleToggleHaldi = () => {
        if (addHaldiDetails) {
            dispatch(toggleAddHaldiDetails(false))
        } else {
             dispatch(toggleAddHaldiDetails(true))
        }
    }
    useEffect(() =>{
        if(selectedForHaldi){
            const newString = formatDate(selectedForHaldi);
            setFormattedDateForHaldi(newString);
            dispatch(saveHaldiDate(newString,selectedForHaldi));
        }
  
       

    },[selectedForHaldi])

    

  return (
    <Flex w={['100%','90%','90%','80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    <Flex w={'100%'} direction={'column'}>
        <UnorderedList>
            <ListItem>
            <Text fontSize={'lg'}>Haldi Details (Optional)</Text>
            </ListItem>
        </UnorderedList>
        <Checkbox  p={'15px 0px'} colorScheme='green' isChecked={addHaldiDetails} onChange={handleToggleHaldi} >
                Click to {addHaldiDetails?'remove':'add'} Haldi Details
              </Checkbox>
    </Flex>


    {
        addHaldiDetails && (
            <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
    <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        <Text w={['100%','100%','45%','45%']} pr={'20px'}>Event Type :</Text>
        <Input value={'Haldi'} readOnly />            
    </Flex>
    <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        <Text   w={['100%','100%','30%','30%']}>Haldi Date: </Text>
        <Flex w={['90%','80%','60%','60%']} position={'relative'} >
            <Box w={['90%','80%','60%','60%']} >
                <Input placeholder='Click to select Date' value={haldiDate} readOnly  onClick={()=>{setShowDatePickerForHaldi(true)}}/>
            </Box>
            {
                showDatePickerForHaldi && (
                <CustomDatePickerForHaldi selectedForHaldi={selectedForHaldi} setSelectedForHaldi={setSelectedForHaldi} setShowDatePickerForHaldi={setShowDatePickerForHaldi}/>
                )
            }
        </Flex>   
    </Flex>

    {
        haldiTime &&(
            <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        <Text w={['100%','100%','30%','30%']} pr={'20px'} >Selected Time :</Text>
        <Input value={haldiTime} w={'max-content'} readOnly />            
    </Flex>
        )
    }
    <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        <Text   w={['100%','100%','30%','30%']}>Haldi time: </Text>
        
        <Flex w={['90%','80%','60%','60%']} position={'relative'} >
            <Box w={['90%','80%','60%','60%']} >
            <Button onClick={onOpen}>{haldiTime?'Click to change Time':'Click to select Time'}</Button>
            </Box>
            <Flex w={'100%'}>
             <Modal  closeOnOverlayClick={false} size={'full'} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent  >
             <Flex p={'10px 0px'}   w={'100%'} justifyContent={'center'} bg={'indigo'}>
              <Flex w={'80%'} justifyContent={'space-between'} alignItems={'center'}>
              <Text fontSize={['large','large','x-large','x-large']}>Haldi Time</Text>
              <Button onClick={()=>{
                if(haldiTime){
                    onClose()
                }else{
                    customToast('Please select haldi time first.')
                }
              }}>Close</Button>
              </Flex>
             </Flex>
              <ModalBody w={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pb={6}>
              

                  <Flex w={'100%'}   justifyContent={'center'} alignItems={'center'} p={'20px 0px'}>
                  <TimePickerForHaldi onClose={onClose} />

                  </Flex>
              </ModalBody>
    
              
            </ModalContent>
          </Modal>
            </Flex>
            
        </Flex>   
    </Flex>

    <Flex w={'100%'} direction={['column','column','row','row']} pt={'5px'} gap={['10px','10px','20px','20px']} justifyContent={'left'} alignItems={['start','start','start','start']}>
                <Flex alignItems={['start','start','center','center']} justifyContent={['left','left','left','left']} gap={['10px','10px','10px','10px']} w={isHaldiAddressSameAsWedding?['100%','100%','100%','100%']:['100%','100%','30%','30%']}  direction={isHaldiAddressSameAsWedding?['column','column','row','row']:'column'} >
                <Text >Haldi Address:</Text>
                <Checkbox ml={isHaldiAddressSameAsWedding?['0px','0px','20px','20px']:'0px'} p={'15px 0px'} colorScheme='green' isChecked={isHaldiAddressSameAsWedding} onChange={handleCheck} >
                Same as Wedding Address
              </Checkbox>
                </Flex>
                 <Textarea
                    ref={haldiAddressRef}
                    value={haldiAddress}
                    display={!isHaldiAddressSameAsWedding?'flex':'none'}
                    w={['90%','80%','60%','60%']}
                    rounded={'lg'}
                    onChange={(e)=>{dispatch(saveHaldiAddress(e.target.value))}}
                    placeholder="Enter the detailed Haldi address"
                    size="sm"
                />
            </Flex>
    </Flex>
        )
    }

   

    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'}  p={'10px 10px'} borderRadius={'10px'}>
           <Flex  gap={'20px'}  w={'100%'} position={'relative'} justifyContent={'space-between'} alignItems={'center'} p={'10px 0px'}>
            <Button fontSize={'sm'}  isDisabled={currentPage> 1? false:true} display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}
            onClick={linkPage_handlePrevious}
            >
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

    <Flex  w={'100%'} gap={'10px'} justifyContent={'center'}  borderRadius={'10px'}>
     <Button w={'100%'} colorScheme={'purple'}  leftIcon={<FaEye />}>
        Preview
    </Button>
    </Flex>

      
    </Flex>
  )
}

export default C_HaldiDetails
