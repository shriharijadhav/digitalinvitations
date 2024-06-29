import { ArrowBackIcon, ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, IconButton, Image, Input, Link, ListItem, Radio, RadioGroup, Text, UnorderedList, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { changePriorityBetweenBrideAndGroom, deleteActualImage, deletePhotoFromGallery, makeApiCallToSaveNewCard, previousPage, proceedToNextPage, saveActualImage, saveBrideAndGroomBasicDetails, saveMediaDetails, savePhotoGallery, saveUserAudioFile, toggleRejectDefaultAudioFiles, updateSelectedAudioDetails, updateSelectedAudioIndex } from '../../store/actions'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import ImageCrop from './ImageCrop'
import { BsThreeDotsVertical } from "react-icons/bs";
                
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


  const C_AudioFile = () => {
    const audioFileRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState(0);
    const [selectedItemDetails, setSelectedItemDetails] = useState(null); 

    const userAudioFile = useSelector((store)=>store.tempNewCardData.userAudioFile)

    const selectedAudioIndex = useSelector((store)=>store.tempNewCardData.selectedAudioIndex)
    const selectedAudioDetails = useSelector((store)=>store.tempNewCardData.selectedAudioDetails)

    const defaultAudioFiles = useSelector((store)=>store.tempNewCardData.defaultAudioFiles)
    const rejectDefaultAudioFiles = useSelector((store)=>store.tempNewCardData.rejectDefaultAudioFiles)


 
    const [value, setValue] = React.useState('1')
    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)
    const photoGallery = useSelector((store) => store.tempNewCardData.photoGallery)


    // // data to send to the server
    // const data =useSelector(store=>store.tempNewCardData)
    //  const formData = new FormData()

    // if(data.brideDetails.brideActualImage){
    //     formData.append('brideActualImage', data.brideDetails.brideActualImage);
    // }
    // if(data.groomDetails.groomActualImage){
    //     formData.append('groomActualImage', data.groomDetails.groomActualImage);
    // }
    // if(data.brideDetails.parentDetails.motherDetails.brideMotherActualImage){
    //     formData.append('brideMotherActualImage', data.brideDetails.parentDetails.motherDetails.brideMotherActualImage);
    // }
    // if(data.brideDetails.parentDetails.fatherDetails.brideFatherActualImage){
    //     formData.append('brideFatherActualImage', data.brideDetails.parentDetails.fatherDetails.brideFatherActualImage);
    // }
    // if(data.groomDetails.parentDetails.motherDetails.groomMotherActualImage){
    //     formData.append('groomMotherActualImage', data.groomDetails.parentDetails.motherDetails.groomMotherActualImage);
    // }
    // if(data.groomDetails.parentDetails.fatherDetails.groomFatherActualImage){
    //     formData.append('groomFatherActualImage', data.groomDetails.parentDetails.fatherDetails.groomFatherActualImage);
    // }
     
    // formData.append('allData',JSON.stringify(data));
    // //  data to send to the server ends

    // photoGallery.forEach((file, index) => {
    //     formData.append(`photoGallery_${index}`, file);
    // });
 
    
    const handleCheckboxChange = (index, item) => {
        if (selectedAudioIndex !== index) {
          // Select the new checkbox
          dispatch(updateSelectedAudioIndex(index));
          dispatch(updateSelectedAudioDetails(item));
         
        }
      };



    

    const customToast = (message)=>{
        toast({
            title: `${message}`,
            status: 'warning',
            position: 'bottom-center',
            isClosable: true,
          })
    }

    const warningToast = () => {
        toast({
            title: `Please click on the check-box first.`,
            status: 'warning',
            position: 'bottom-center',
            isClosable: true,
          }) 
    }

    const linkPage_handleNext = () => {
        if('value'){
        // proceed to next page - update currentPage value
        //    save data to database
        // upon successful save . re-fetch updated data from   database

        dispatch(proceedToNextPage())

        }
         
    }

    const linkPage_handlePrevious = () => {
        dispatch(previousPage())        
    }

         
   

    const handleFileChange = (event) => {
        const supportedAudioTypes = [
            'audio/mpeg',
            'audio/wav',
            'audio/ogg',
            'audio/aac',
            'audio/webm',
            'audio/weba'
        ];

        const file = event.target.files[0];
        if (file.size > 8 * 1024 * 1024) {
            alert('File is too large. Please select a file below 8mb size.');
        }

        if (supportedAudioTypes.includes(file.type)) {
            // console.log('Supported audio file selected:', file);
            dispatch(saveUserAudioFile(file));
          
        } else {
            alert('Unsupported audio file type. Please select a valid audio file.');
            // Reset the file input (optional)
            event.target.value = null;
        }

    };

   
      


  return (
    <Flex as={'form'} w={['100%','90%','90%','80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    <Flex w={'100%'}>
        <UnorderedList>
            <ListItem>
            <Text fontSize={'lg'}>Audio Song - To play on invitation card</Text>
            </ListItem>
        </UnorderedList>
    </Flex>


    <Flex  border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
        <Text fontSize={'lg'}>Select Song from below default collection</Text>
        <Flex w={'100%'}>
        
         <Button onClick={onOpen}>Song collection</Button>

        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader p={'20px 20px'}>Select audio song</ModalHeader>
            <ModalCloseButton size={'lg'} />
            <ModalBody display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Flex w={'90%'} direction={'column'}>
                <Text pb={'20px'}>You can select only 1 song at maximum</Text>
                {
                    defaultAudioFiles.length > 0 && (
                        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap="20px">
                          {defaultAudioFiles.map((item, index) => (
                            <GridItem
                              key={item.audioUrl}
                              w="100%"
                              border="1px solid gray"
                              rounded="lg"
                              p="10px 10px"
                              display="flex"
                              justifyContent="space-around"
                              alignItems="center"
                              gap="10px"
                              backgroundColor={'gray.800'}
                            >
                              <Flex>
                                <Checkbox
                                bg={'gray.400'}
                                colorScheme='green'
                                border={'1ps solid lightgrey'}
                                  isChecked={selectedAudioIndex === index}
                                  onChange={() => handleCheckboxChange(index, item)}
                                />
                              </Flex>
                              <Flex direction="column" gap="10px">
                                <Text fontWeight="500" fontSize="large">{item.name}</Text>
                                <audio controls>
                                  <source src={item.audioUrl} />
                                  Your browser does not support the audio element.
                                </audio>
                              </Flex>
                            </GridItem>
                          ))}
                        </Grid>
                    )
                }
               
            </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        
        </Flex>       
        </Flex>
    </Flex>

    <Accordion w={'100%'} border={'1px solid gray'} rounded={'lg'} overflow={'hidden'} allowToggle>
        <AccordionItem   >
            <h2>
            <AccordionButton >
                <Box as='span' flex='1' textAlign='left'>
                <Text >Instructions to select audio file</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel transition={'all'} transitionDelay={'1s'}  pb={4}>
            <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
            <UnorderedList>
                <ListItem>
                <Text color={'yellow.200'}> Only MP3, WEBA or WEBM formats supported.</Text>
                </ListItem>
                <ListItem>
                <Text>Upload audio file upto 8mb size only.</Text>
                </ListItem>
            </UnorderedList>
        
        </Flex>    
            </AccordionPanel>
    </AccordionItem>
    </Accordion>

    <Flex  border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
        <Text fontSize={'lg'}>Upload your own audio song/file</Text>
        <Text fontSize={'smaller'} color={'lightgrey'} display={!rejectDefaultAudioFiles?'flex':'none'} >(Check the below checkbox first.)</Text>

        <FormControl display={'flex'} alignItems={'baseline'} gap={'10px'} cursor={'pointer'} >
        <Checkbox
        colorScheme='green'
        border={'1ps solid lightgrey'}
        isChecked={rejectDefaultAudioFiles}
         onChange={()=>{dispatch(toggleRejectDefaultAudioFiles());
            if(rejectDefaultAudioFiles){
                dispatch(saveUserAudioFile(null))
                audioFileRef.current.value = null
            }
         }}
        />
        <FormLabel fontSize={'large'} cursor={'pointer'}>I want to upload my own sound.</FormLabel>
        </FormControl>
           
        <Flex w={'100%'} direction={'column'}>
        <Flex w={'100%'} direction={'column'} p={'10px 0px'} gap={'10px'}>
        <FormControl >
            <Input variant={'ghost'} ref={audioFileRef} type='file'  name='audioFile' onChange={handleFileChange} isDisabled={!rejectDefaultAudioFiles} />
        </FormControl>

        {userAudioFile && (
           <Flex w={'100%'} direction={'column'} p={'10px 0px'} gap={'10px'} >
           <Divider/>
            <Text p={'10px 0px'} fontSize={'large'}>Preview - Your selected audio song(file)</Text>
            <audio controls >
                <source src={URL.createObjectURL(userAudioFile)} type={userAudioFile.type} />
                Your browser does not support the audio element.
            </audio>
            <Button w={'max-content'} onClick={()=>{dispatch(saveUserAudioFile(null))}}>Delete Audio</Button>
           </Flex>
          )}

        </Flex>
        <Divider/>
        <Flex w={'100%'} p={'15px 0px'} display={rejectDefaultAudioFiles?'flex':'none'}>
                <FormControl >
                <Link _hover={{textDecoration:'none'}}  href='https://youtubemusicplayer.vercel.app/' title='Click for help' isExternal>
                <Text _hover={{textDecoration:'none'}} > Download any Youtube song's audio file. <Text as={'span'} color={'skyblue'} textUnderlineOffset={'5px'} textDecoration={'underline wavy'}>Click here<ExternalLinkIcon mx='2px' /></Text></Text>
                </Link>
                <FormHelperText display={'flex'}  alignItems={'baseline'} gap={'5px'}>
                <Text>(Once audio starts playing click on </Text>
                <IconButton size={'sm'} icon={<BsThreeDotsVertical/>} />
                <Text> to get download option.)</Text>
                </FormHelperText>
                </FormControl>
            </Flex>
        </Flex>
        </Flex>
    </Flex>

    

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

        //    onClick={linkPage_handleNext}
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

export default C_AudioFile
