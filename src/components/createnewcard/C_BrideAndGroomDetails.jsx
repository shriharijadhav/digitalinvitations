import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, Image, Input, ListItem, Radio, RadioGroup, Text, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { changePriorityBetweenBrideAndGroom, deleteActualImage, previousPage, proceedToNextPage, saveActualImage, saveBrideAndGroomBasicDetails, saveMediaDetails } from '../../store/actions'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import ImageCrop from './ImageCrop'
   


  const C_BrideAndGroomDetails = () => {

 
    const brideImageRef = useRef();
    const groomImageRef = useRef();

    const dispatch = useDispatch()
    const [value, setValue] = React.useState('1')
    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)


    const priorityBetweenBrideAndGroom = useSelector((store) => store.tempNewCardData.eventDetails.priorityBetweenBrideAndGroom)

    const brideDetails = useSelector((store) => store.tempNewCardData.brideDetails)
    const b_firstName = brideDetails.firstName
    const b_lastName = brideDetails.lastName
    const b_actualImage = brideDetails.brideActualImage;

    const b_instagramLink = brideDetails.socialMediaLinks[0].instagramLink
    const b_facebookLink = brideDetails.socialMediaLinks[1].facebookLink
    const b_youtubeLink = brideDetails.socialMediaLinks[2].youtubeLink


    const groomDetails = useSelector((store) => store.tempNewCardData.groomDetails)
    const g_firstName = groomDetails.firstName
    const g_lastName = groomDetails.lastName
    const g_actualImage = groomDetails.groomActualImage;
    const g_instagramLink = groomDetails.socialMediaLinks[0].instagramLink
    const g_facebookLink = groomDetails.socialMediaLinks[1].facebookLink
    const g_youtubeLink = groomDetails.socialMediaLinks[2].youtubeLink

    const [instagramChecked,setInstagramChecked] =useState(true);
    const [facebookChecked,setFacebookChecked] =useState(true);
    const [youtubeChecked,setYoutubeChecked] =useState(true);

    const [g_instagramChecked,setG_InstagramChecked] =useState(true);
    const [g_facebookChecked,setG_FacebookChecked] =useState(true);
    const [g_youtubeChecked,setG_YoutubeChecked] =useState(true);

    const customToast = (message)=>{
        toast({
            title: `${message}`,
            status: 'warning',
            position: 'bottom-center',
            isClosable: true,
          })
    }

    const handleChangeForBride = (e) => {
        const inputValue = e.target.value;
        const filteredValue = inputValue.replace(/[^a-zA-Z]/g, '');
        dispatch(saveBrideAndGroomBasicDetails('brideDetails', e.target.name, filteredValue))
    }

    const handleChangeForGroom = (e) => {
        const inputValue = e.target.value;
        const filteredValue = inputValue.replace(/[^a-zA-Z]/g, '');
        dispatch(saveBrideAndGroomBasicDetails('groomDetails', e.target.name, filteredValue))
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

         
    const handleMediaUrlChange_bride = (e) => {
        if (e.target.name === 'instagramLink') {
            dispatch(saveMediaDetails('brideDetails',0,e.target.name,e.target.value))
        } else if(e.target.name === 'facebookLink') {
            dispatch(saveMediaDetails('brideDetails',1,e.target.name,e.target.value))
        }else{
            dispatch(saveMediaDetails('brideDetails',2,e.target.name,e.target.value))
        }
    }

    const handleMediaUrlChange_groom = (e) => {
        if (e.target.name === 'instagramLink') {
            dispatch(saveMediaDetails('groomDetails',0,e.target.name,e.target.value))
        } else if(e.target.name === 'facebookLink') {
            dispatch(saveMediaDetails('groomDetails',1,e.target.name,e.target.value))
        }else{
            dispatch(saveMediaDetails('groomDetails',2,e.target.name,e.target.value))
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            // Check if file size is less than or equal to 2MB (2 * 1024 * 1024 bytes)
            if (file.size <= 8 * 1024 * 1024) {
                // File size is within limit, you can proceed with handling the file
                if (event.target.name === 'brideImage') {
                    dispatch(saveActualImage(event.target.files[0],'brideDetails'))                    
                } else {
                    dispatch(saveActualImage(event.target.files[0],'groomDetails'))                    
                }
                console.log('File selected:', file);
            } else {
                // File size exceeds 2MB, show alert to the user
                alert('File size exceeds 8MB. Please select a smaller file.');
                // Reset the file input (optional)
                event.target.value = null;
                
            }
        }
    };

    useEffect(() => {
        if(!instagramChecked){
            dispatch(saveMediaDetails('brideDetails',0,'instagramLink',''))
        }

        if(!facebookChecked){
            dispatch(saveMediaDetails('brideDetails',1,'facebookLink',''))
        }
        if(!youtubeChecked){
            dispatch(saveMediaDetails('brideDetails',2,'youtubeLink',''))
        }

        if(!g_instagramChecked){
            dispatch(saveMediaDetails('groomDetails',0,'instagramLink',''))
        }

        if(!g_facebookChecked){
            dispatch(saveMediaDetails('groomDetails',1,'facebookLink',''))
        }
        if(!g_youtubeChecked){
            dispatch(saveMediaDetails('groomDetails',2,'youtubeLink',''))
        }

 
    },[instagramChecked,facebookChecked,youtubeChecked,g_instagramChecked,g_facebookChecked,g_youtubeChecked])

  return (
    <Flex as={'form'} w={['100%','90%','90%','80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    <Flex w={'100%'}>
        <UnorderedList>
            <ListItem>
            <Text fontSize={'lg'}>Bride & Groom Details </Text>
            </ListItem>
        </UnorderedList>
    </Flex>


    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
        <Text w={['100%','100%','40%','40%']} fontSize={'lg'}>Priority or Preference</Text>
        <Text fontSize={'sm'}>Choose between Bride and Groom to show details first?        </Text>
        <Flex direction={'column'}>
            <RadioGroup onChange={(value)=>{dispatch(changePriorityBetweenBrideAndGroom(value))}} value={priorityBetweenBrideAndGroom}>
                <Flex  direction={'column'} gap={'10px'}>
                <Radio colorScheme='blue' value='bride'>
                    Bride
                </Radio>
                <Radio colorScheme='blue' value='groom'>
                    Groom
                </Radio>
                </Flex>
            </RadioGroup>
        </Flex>
        </Flex>
    </Flex>



    <Accordion w={'100%'} border={'1px solid gray'} rounded={'lg'} overflow={'hidden'} allowToggle>
                    <AccordionItem   >
                        <h2>
                        <AccordionButton >
                            <Box as='span' flex='1' textAlign='left'>
                            <Text >Instructions to select Image</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel transition={'all'} transitionDelay={'1s'}  pb={4}>
                        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
                        <UnorderedList>
                            <ListItem>
                            <Text>Select an image with a minimum resolution of 500 x 500 pixels.</Text>
                            </ListItem>
                            <ListItem>
                            <Text>Upload image upto 8mb size only.</Text>
                            </ListItem>
                            <ListItem>
                            <Text>Ensure the person is positioned at the center of the image.</Text>
                            </ListItem>
                        </UnorderedList>
                       
                    </Flex>    
                        </AccordionPanel>
            </AccordionItem>
        </Accordion>

    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
        <Text w={['100%','100%','40%','40%']} fontSize={'lg'}>Bride's Details</Text>
        <Flex w={'100%'} direction={'column'} gap={'10px'}>
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type='text' gender='brideDetails' name='firstName'   placeholder="Enter bride's first name" 
                value={b_firstName} 
                onChange={(e)=>{handleChangeForBride(e)}}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type='text' gender='brideDetails' name='lastName'   placeholder="Enter bride's last name"  
                value={b_lastName} 
                onChange={(e)=>{handleChangeForBride(e)}}
                 />
            </FormControl>
            <FormControl >
                <FormLabel p={'5px 0px'} >Upload Bride's Image</FormLabel>
                <Input variant={'ghost'} file={b_actualImage} ref={brideImageRef} type='file' name='brideImage' onChange={handleFileChange} />
                {b_actualImage && (
                    <Flex w={'max-content'} p={'10px 0px'} direction={'column'} gap={'5px'}>
                    <Text>Bride Image Preview</Text>
                    <Image
                      src={URL.createObjectURL(b_actualImage)}
                      alt="Bride"
                      border={'1px solid gray'}
                      p={'2px'}
                      boxSize="150px"
                      objectFit="cover"
                      mt={2}
                    />
                    <Button onClick={()=>{
                        dispatch(deleteActualImage('brideDetails'));
                        brideImageRef.current.value = null;
                    }}>Delete</Button>
                    </Flex>
                  )}
            </FormControl>
            <FormControl p={'5px 0px'}>
                <FormLabel p={'10px 0px'}>Bride's Social Media Links</FormLabel>
                <Accordion w={'100%'} border={'1px solid gray'} allowToggle>
                        <AccordionItem   >
                            <h2>
                            <AccordionButton >
                                <Box as='span' flex='1' textAlign='left'>
                                <Text>Enter Social Media Links</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel transition={'all'} transitionDelay={'1s'}  pb={4}>
                                <Flex w={'100%'} direction={'column'} gap={'15px'}>
                                    <Flex w={'100%'} gap={'10px'}>
                                        <Checkbox size='md' colorScheme='green' isChecked={instagramChecked} onChange={()=>{setInstagramChecked(!instagramChecked)}}></Checkbox>
                                        <Input placeholder="Enter Bride's Instagram profile link" isDisabled={instagramChecked?false:true} type='text'
                                        name='instagramLink'
                                        value={b_instagramLink}
                                        onChange={(e)=>{handleMediaUrlChange_bride(e)}}
                                        />
                                    </Flex>
                                    <Flex w={'100%'} gap={'10px'}>
                                        <Checkbox size='md' colorScheme='green' isChecked={facebookChecked} onChange={()=>{setFacebookChecked(!facebookChecked)}}></Checkbox>
                                        <Input placeholder="Enter Bride's Facebook profile link" isDisabled={facebookChecked?false:true} type='text'
                                        name='facebookLink'
                                        value={b_facebookLink}
                                        onChange={(e)=>{handleMediaUrlChange_bride(e)}}
                                        />
                                    </Flex>
                                    <Flex w={'100%'} gap={'10px'}>
                                    <Checkbox size='md' colorScheme='green' isChecked={youtubeChecked} onChange={()=>{setYoutubeChecked(!youtubeChecked)}}></Checkbox>
                                    <Input placeholder="Enter Bride's Youtube channel link" isDisabled={youtubeChecked?false:true} type='text'
                                    name='youtubeLink'
                                    value={b_youtubeLink}
                                    onChange={(e)=>{handleMediaUrlChange_bride(e)}}
                                    />
                                    </Flex>
                                </Flex>
                            </AccordionPanel>
                </AccordionItem>
            </Accordion>
            </FormControl>
        </Flex>
        </Flex>
    </Flex>

    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
    <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
    <Text w={['100%','100%','40%','40%']} fontSize={'lg'}>Groom's Details</Text>
    <Flex w={'100%'} direction={'column'} gap={'10px'}>
        <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type='text' gender='groomDetails' name='firstName'   placeholder="Enter groom's first name" 
            value={g_firstName} 
            onChange={(e)=>{handleChangeForGroom(e)}}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' gender='groomDetails' name='lastName'   placeholder="Enter groom's last name" 
            value={g_lastName} 
            onChange={(e)=>{handleChangeForGroom(e)}}
            />        
        </FormControl>
        <FormControl >
            <FormLabel p={'5px 0px'} >Upload Groom's Image</FormLabel>
            <Input variant={'ghost'} type='file' file={g_actualImage} ref={groomImageRef} name='groomImage' onChange={handleFileChange} />
            {g_actualImage && (
                <Flex w={'max-content'} p={'10px 0px'} direction={'column'} gap={'5px'}>
                <Text>Groom Image Preview</Text>
                <Image
                  src={URL.createObjectURL(g_actualImage)}
                  alt="Groom"
                  border={'1px solid gray'}
                  p={'2px'}
                  boxSize="150px"
                  objectFit="cover"
                  mt={2}
                />
                <Button onClick={()=>{
                    dispatch(deleteActualImage('groomDetails'));
                    groomImageRef.current.value = null;
                }}>Delete</Button>
                </Flex>
              )}
            </FormControl>
        <FormControl p={'5px 0px'}>
            <FormLabel p={'10px 0px'}>Groom's Social Media Links</FormLabel>
            <Accordion w={'100%'} border={'1px solid gray'} allowToggle>
                    <AccordionItem   >
                        <h2>
                        <AccordionButton >
                            <Box as='span' flex='1' textAlign='left'>
                            <Text>Enter Social Media Links</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel transition={'all'} transitionDelay={'1s'}  pb={4}>
                            <Flex w={'100%'} direction={'column'} gap={'15px'}>
                                <Flex w={'100%'} gap={'10px'}>
                                <Checkbox size='md' colorScheme='green' isChecked={g_instagramChecked} onChange={()=>{setG_InstagramChecked(!g_instagramChecked)}}></Checkbox>
                                <Input placeholder="Enter Groom's Instagram profile link" isDisabled={g_instagramChecked?false:true} type='text'
                                name='instagramLink'
                                value={g_instagramLink}
                                onChange={(e)=>{handleMediaUrlChange_groom(e)}}
                                />
                                </Flex>
                                <Flex w={'100%'} gap={'10px'}>
                                <Checkbox size='md' colorScheme='green' isChecked={g_facebookChecked} onChange={()=>{setG_FacebookChecked(!g_facebookChecked)}}></Checkbox>
                                <Input placeholder="Enter Groom's Facebook profile link" isDisabled={g_instagramChecked?false:true} type='text'
                                name='facebookLink'
                                value={g_facebookLink}
                                onChange={(e)=>{handleMediaUrlChange_groom(e)}}
                                />
                                </Flex>
                                <Flex w={'100%'} gap={'10px'}>
                                <Checkbox size='md' colorScheme='green' isChecked={g_youtubeChecked} onChange={()=>{setG_YoutubeChecked(!g_youtubeChecked)}}></Checkbox>
                                <Input placeholder="Enter Groom's Facebook profile link" isDisabled={g_youtubeChecked?false:true} type='text'
                                name='youtubeLink'
                                value={g_youtubeLink}
                                onChange={(e)=>{handleMediaUrlChange_groom(e)}}
                                />
                                </Flex>
                            </Flex>
                        </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </FormControl>
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

export default C_BrideAndGroomDetails
