import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, Grid, GridItem, Input, ListItem, Radio, RadioGroup, Select, Text, Textarea, UnorderedList, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { makeEngagementAddressSameAsWedding, previousPage, proceedToNextPage, saveEngagementAddress, saveEngagementDate, saveEngagementTime, toggleAddEngagementDetails } from '../../store/actions'
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
import CustomDatePickerForEngagement from './CustomDatePickerForEngagement'
import TimePicker from './TimePicker'

const C_EngagementDetails = () => {



    const engagementAddressRef = useRef()
    const toast = useToast()
    const [showDatePickerForEngagement,setShowDatePickerForEngagement] = useState(false)
    const [selectedForEngagement, setSelectedForEngagement] = useState();


    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('1')
    const [formattedDateForEngagement, setFormattedDateForEngagement] = useState('');

    const engagementDetails = useSelector((store) => store.tempNewCardData.eventDetails.subEvents.engagementDetails)
    const engagementDate = engagementDetails.engagementDate 
    const engagementTime = engagementDetails.engagementTime
    const raw_engagementDate = engagementDetails.raw_engagementDate
    const engagementAddress = engagementDetails.engagementAddress
    
 
    const isEngagementAddressSameAsWedding = useSelector((store) => store.tempNewCardData.eventDetails.isEngagementAddressSameAsWedding)
    const addEngagementDetails = useSelector((store) => store.tempNewCardData.eventDetails.addEngagementDetails)

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
        if(isEngagementAddressSameAsWedding){
            dispatch(makeEngagementAddressSameAsWedding(false))
        }else{
            dispatch(makeEngagementAddressSameAsWedding(true))
            dispatch(saveEngagementAddress(''))
            engagementAddressRef.current.value = '';
            // clear the address 
        }
    }

    const handleToggleEngage = () => {
        if (addEngagementDetails) {
            dispatch(toggleAddEngagementDetails(false))
        } else {
             dispatch(toggleAddEngagementDetails(true))
        }
    }
    useEffect(() =>{
        if(selectedForEngagement){
            const newString = formatDate(selectedForEngagement);
            setFormattedDateForEngagement(newString);
            dispatch(saveEngagementDate(newString,selectedForEngagement));
        }
  
       

    },[selectedForEngagement])

    

  return (
    <Flex w={['100%','90%','90%','80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    <Flex w={'100%'} direction={'column'}>
        <UnorderedList>
            <ListItem>
            <Text fontSize={'lg'}>Engagement Details (Optional)</Text>
            </ListItem>
        </UnorderedList>
        <Checkbox  p={'15px 0px'} colorScheme='green' isChecked={addEngagementDetails} onChange={handleToggleEngage} >
                Click to {addEngagementDetails?'remove':'add'} Engagement Details
              </Checkbox>
    </Flex>


    {
        addEngagementDetails && (
            <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
    <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        <Text w={['100%','100%','45%','45%']} pr={'20px'}>Event Type :</Text>
        <Input value={'Engagement'} readOnly />            
    </Flex>
    <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        <Text   w={['100%','100%','30%','30%']}>Engagement Date: </Text>
        <Flex w={['90%','80%','60%','60%']} position={'relative'} >
            <Box w={['90%','80%','60%','60%']} >
                <Input placeholder='Click to select Date' value={engagementDate} readOnly  onClick={()=>{setShowDatePickerForEngagement(true)}}/>
            </Box>
            {
                showDatePickerForEngagement && (
                <CustomDatePickerForEngagement selectedForEngagement={selectedForEngagement} setSelectedForEngagement={setSelectedForEngagement} setShowDatePickerForEngagement={setShowDatePickerForEngagement}/>
                )
            }
        </Flex>   
    </Flex>

    {
        engagementTime &&(
            <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        <Text w={['100%','100%','30%','30%']} pr={'20px'} >Selected Time :</Text>
        <Input value={engagementTime} w={'max-content'} readOnly />            
    </Flex>
        )
    }
    <Flex w={'100%'} direction={['column','column','row','row']} gap={'20px'} justifyContent={'left'} alignItems={['start','start','center','center']}>
        <Text   w={['100%','100%','30%','30%']}>Engagement time: </Text>
        
        <Flex w={['90%','80%','60%','60%']} position={'relative'} >
            <Box w={['90%','80%','60%','60%']} >
            <Button onClick={onOpen}>{engagementTime?'Click to change Time':'Click to select Time'}</Button>
            </Box>
            <Flex w={'100%'}>
             <Modal  closeOnOverlayClick={false} size={['sm','md','lg','xl']} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent  >
             <Flex p={'10px 0px'}   w={'100%'} justifyContent={'center'} bg={'purple.500'}>
              <Flex w={'80%'} justifyContent={'space-between'} alignItems={'center'}>
              <Text fontSize={['large','large','x-large','x-large']}>Engagement Time</Text>
              <Button onClick={()=>{
                if(engagementTime){
                    onClose()
                }else{
                    customToast('Please select engagement time first.')
                }
              }}>Close</Button>
              </Flex>
             </Flex>
              <ModalBody w={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pb={6}>
              

                  <Flex w={'100%'}   justifyContent={'center'} alignItems={'center'} p={'20px 0px'}>
                  <TimePicker onClose={onClose} />

                  </Flex>
              </ModalBody>
    
              
            </ModalContent>
          </Modal>
            </Flex>
            
        </Flex>   
    </Flex>

    <Flex w={'100%'} direction={['column','column','row','row']} pt={'5px'} gap={['10px','10px','20px','20px']} justifyContent={'left'} alignItems={['start','start','start','start']}>
                <Flex alignItems={['start','start','center','center']} justifyContent={['left','left','left','left']} gap={['10px','10px','10px','10px']} w={isEngagementAddressSameAsWedding?['100%','100%','100%','100%']:['100%','100%','30%','30%']}  direction={isEngagementAddressSameAsWedding?['column','column','row','row']:'column'} >
                <Text >Engagement Address:</Text>
                <Checkbox ml={isEngagementAddressSameAsWedding?['0px','0px','20px','20px']:'0px'} p={'15px 0px'} colorScheme='green' isChecked={isEngagementAddressSameAsWedding} onChange={handleCheck} >
                Same as Wedding Address
              </Checkbox>
                </Flex>
                 <Textarea
                    ref={engagementAddressRef}
                    display={!isEngagementAddressSameAsWedding?'flex':'none'}
                    w={['90%','80%','60%','60%']}
                    rounded={'lg'}
                    value={engagementAddress}
                    onChange={(e)=>{dispatch(saveEngagementAddress(e.target.value))}}
                    placeholder="Enter the detailed engagement address"
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

export default C_EngagementDetails
