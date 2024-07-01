import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, Image, Input, ListItem, Radio, RadioGroup, Text, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { changePriorityBetweenParents, clearParentDetails,  deleteActualImage_brideParent, deleteActualImage_groomParent, makeApiCallToSaveNewCard, previousPage, proceedToNextPage, saveActualImage, saveBrideAndGroomBasicDetails, saveBrideParentActualImage, saveBrideParentDetails, saveGroomParentActualImage, saveGroomParentDetails, saveMediaDetails, toggleAddHaldiDetails, toggleAddParentDetails } from '../../store/actions'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import ImageCrop from './ImageCrop'
   


  const C_ParentDetails = () => {

    

    
    
    const addParentDetails = useSelector(store=>store.tempNewCardData.eventDetails.addParentDetails)
    const b_parentDetails  = useSelector((store) => store.tempNewCardData.brideDetails.parentDetails) 
    const b_motherDetails = b_parentDetails.motherDetails
    const b_mother_firstName = b_motherDetails.firstName
    const b_mother_lastName = b_motherDetails.lastName
    const brideMotherActualImage = b_motherDetails.brideMotherActualImage

    const b_fatherDetails = b_parentDetails.fatherDetails
    const b_father_firstName = b_fatherDetails.firstName
    const b_father_lastName = b_fatherDetails.lastName
    const brideFatherActualImage = b_fatherDetails.brideFatherActualImage



    const g_parentDetails  = useSelector((store) => store.tempNewCardData.groomDetails.parentDetails) 
    const g_motherDetails = g_parentDetails.motherDetails
    const g_mother_firstName = g_motherDetails.firstName
    const g_mother_lastName = g_motherDetails.lastName
    const groomMotherActualImage = g_motherDetails.groomMotherActualImage

    const g_fatherDetails = g_parentDetails.fatherDetails
    const g_father_firstName = g_fatherDetails.firstName
    const g_father_lastName = g_fatherDetails.lastName
    const groomFatherActualImage = g_fatherDetails.groomFatherActualImage

    const priorityBetweenParents = useSelector((store) => store.tempNewCardData.eventDetails.priorityBetweenParents)

    // console.log(b_parentDetails)

    const handleToggleParents = () => {
        if (addParentDetails) {
            console.log('if')
            dispatch(toggleAddParentDetails(false))
            dispatch(clearParentDetails())
        } else {
            console.log('else')
             dispatch(toggleAddParentDetails(true))
        }
    }
 
    const brideMotherImageRef = useRef();
    const brideFatherImageRef = useRef();

    const groomMotherImageRef = useRef();
    const groomFatherImageRef = useRef();

    const dispatch = useDispatch()
    const [value, setValue] = React.useState('1')
    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)

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

    const handleChangeForBrideParent = (e) => {
        const inputValue = e.target.value;
        const filteredValue = inputValue.replace(/[^a-zA-Z]/g, '');
        dispatch(saveBrideParentDetails(e.target.name, filteredValue))    
    }

    const handleChangeForGroomParent = (e) => {
        const inputValue = e.target.value;
        const filteredValue = inputValue.replace(/[^a-zA-Z]/g, '');
        dispatch(saveGroomParentDetails(e.target.name, filteredValue))    
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
                if (event.target.name === 'brideMotherImage') {
                    dispatch(saveBrideParentActualImage(event.target.files[0],'brideMotherImage'))                    
                } else if(event.target.name === 'brideFatherImage') {
                    dispatch(saveBrideParentActualImage(event.target.files[0],'brideFatherImage'))                    
                } else if (event.target.name === 'groomMotherImage') {
                    dispatch(saveGroomParentActualImage(event.target.files[0],'groomMotherImage'))                    
                } else if(event.target.name === 'groomFatherImage') {
                    dispatch(saveGroomParentActualImage(event.target.files[0],'groomFatherImage'))                    
                }else{
                    alert('Something went wrong');
                    event.target.value = null;

                }


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
    <Flex w={'100%'} direction={'column'}>
        <UnorderedList>
            <ListItem>
            <Text fontSize={'lg'}>Parent's Details (Optional)</Text>
            </ListItem>
        </UnorderedList>
        <Checkbox  p={'15px 0px'} colorScheme='green' isChecked={addParentDetails} onChange={handleToggleParents} >
                Click to {addParentDetails?'remove':'add'} Parent's Details
              </Checkbox>
    </Flex>


    {
        addParentDetails && (
            <Flex direction={'column'} w={'100%'} gap={'20px'}>
        <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
        <Text w={['100%','100%','40%','40%']} fontSize={'lg'}>Priority or Preference</Text>
        <Text fontSize={'sm'}>Choose between Bride's and Groom's parents to show details first?        </Text>
        <Flex direction={'column'}>
            <RadioGroup onChange={(value)=>{dispatch(changePriorityBetweenParents(value))}} value={priorityBetweenParents}>
                <Flex  direction={'column'} gap={'10px'}>
                <Radio colorScheme='blue' value='brideParents'>
                    Bride's Parents
                </Radio>
                <Radio colorScheme='blue' value='groomParents'>
                    Groom's Parents
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
        <Text w={['100%','100%','40%','40%']} fontSize={'lg'}>Bride's Parent Details</Text>
        <Flex w={'100%'} direction={'column'} gap={'10px'}>
            <FormControl>
                <FormLabel>Mother's First Name</FormLabel>
                <Input type='text'  name='brideMotherFirstName'   placeholder="Enter bride's mother's first name" 
                value={b_mother_firstName} 
                onChange={(e)=>{handleChangeForBrideParent(e)}}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Mother's Last Name</FormLabel>
                <Input type='text' name='brideMotherLastName'   placeholder="Enter bride's mother's last name"  
                value={b_mother_lastName} 
                onChange={(e)=>{handleChangeForBrideParent(e)}}
                 />
            </FormControl>
            <FormControl >
                <FormLabel p={'5px 0px'} >Upload Bride's Mother's Image</FormLabel>
                <Input variant={'ghost'}  file={brideMotherActualImage} ref={brideMotherImageRef} type='file' name='brideMotherImage' onChange={handleFileChange} />
                {brideMotherActualImage && (
                    <Flex w={'max-content'} p={'10px 0px'} direction={'column'} gap={'5px'}>
                    <Text>Bride's Mother's Image Preview</Text>
                    <Image
                      src={URL.createObjectURL(brideMotherActualImage)}
                      alt="Bride"
                      border={'1px solid gray'}
                      p={'2px'}
                      boxSize="150px"
                      objectFit="cover"
                      mt={2}
                    />
                    <Button w={'max-content'} onClick={()=>{
                        dispatch(deleteActualImage_brideParent('brideMotherImage'));
                        brideMotherImageRef.current = null;
                    }}>Delete</Button>
                    </Flex>
                  )}
            </FormControl>
            
            <Divider />

            <FormControl pt={'10px'}>
                <FormLabel>Father's First Name</FormLabel>
                <Input type='text'  name='brideFatherFirstName'   placeholder="Enter bride's father's first name" 
                value={b_father_firstName} 
                onChange={(e)=>{handleChangeForBrideParent(e)}}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Father's Last Name</FormLabel>
                <Input type='text'  name='brideFatherLastName'    placeholder="Enter bride's father's last name"  
                value={b_father_lastName} 
                onChange={(e)=>{handleChangeForBrideParent(e)}}
                 />
            </FormControl>
            <FormControl >
                <FormLabel p={'5px 0px'} >Upload Bride's Father's Image</FormLabel>
                <Input variant={'ghost'} file={brideFatherActualImage} ref={brideFatherImageRef} type='file' name='brideFatherImage' onChange={handleFileChange} />
                {brideFatherActualImage && (
                    <Flex w={'max-content'} p={'10px 0px'} direction={'column'} gap={'5px'}>
                    <Text>Bride's Father's Image Preview</Text>
                    <Image
                      src={URL.createObjectURL(brideFatherActualImage)}
                      alt="Bride"
                      border={'1px solid gray'}
                      p={'2px'}
                      boxSize="150px"
                      objectFit="cover"
                      mt={2}
                    />
                    <Button w={'max-content'} onClick={()=>{
                        dispatch(deleteActualImage_brideParent('brideFatherImage'));
                        brideFatherImageRef.current = null;
                    }}>Delete</Button>
                    </Flex>
                  )}
            </FormControl>

        </Flex>
        </Flex>
    </Flex>

    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
    <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
    <Text w={['100%','100%','40%','40%']} fontSize={'lg'}>Groom's Parent Details</Text>
    <Flex w={'100%'} direction={'column'} gap={'10px'}>
        <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type='text' name='groomMotherFirstName'   placeholder="Enter groom's mother's first name" 
            value={g_mother_firstName} 
            onChange={(e)=>{handleChangeForGroomParent(e)}}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' name='groomMotherLastName'  placeholder="Enter groom's mother's last name" 
            value={g_mother_lastName} 
            onChange={(e)=>{handleChangeForGroomParent(e)}}
            />        
        </FormControl>
        <FormControl >
            <FormLabel p={'5px 0px'} >Upload Groom's Mother's Image</FormLabel>
            <Input variant={'ghost'} type='file' file={groomMotherActualImage} ref={groomMotherImageRef} name='groomMotherImage' onChange={handleFileChange} />
            {groomMotherActualImage && (
                <Flex w={'max-content'} p={'10px 0px'} direction={'column'} gap={'5px'}>
                <Text>Groom Image Preview</Text>
                <Image
                  src={URL.createObjectURL(groomMotherActualImage)}
                  alt="Groom"
                  border={'1px solid gray'}
                  p={'2px'}
                  boxSize="150px"
                  objectFit="cover"
                  mt={2}
                />
                <Button onClick={()=>{
                    dispatch(deleteActualImage_groomParent('groomMotherImage'));
                    groomMotherImageRef.current= null;
                }}>Delete</Button>
                </Flex>
              )}
        </FormControl>
        
        <Divider />

        <FormControl>
            <FormLabel>Groom's Mother's First Name</FormLabel>
            <Input type='text' name='groomFatherFirstName'   placeholder="Enter groom's mother's first name" 
            value={g_father_firstName} 
            onChange={(e)=>{handleChangeForGroomParent(e)}}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Groom's Mother's Last Name</FormLabel>
            <Input type='text' name='groomFatherLastName'  placeholder="Enter groom's mother's last name" 
            value={g_father_lastName} 
            onChange={(e)=>{handleChangeForGroomParent(e)}}
            />        
        </FormControl>
        <FormControl >
            <FormLabel p={'5px 0px'} >Upload Groom's Mother's Image</FormLabel>
            <Input variant={'ghost'} type='file' file={groomFatherActualImage} ref={groomFatherImageRef} name='groomFatherImage' onChange={handleFileChange} />
            {groomFatherActualImage && (
                <Flex w={'max-content'} p={'10px 0px'} direction={'column'} gap={'5px'}>
                <Text>Groom Image Preview</Text>
                <Image
                  src={URL.createObjectURL(groomFatherActualImage)}
                  alt="Groom"
                  border={'1px solid gray'}
                  p={'2px'}
                  boxSize="150px"
                  objectFit="cover"
                  mt={2}
                />
                <Button onClick={()=>{
                    dispatch(deleteActualImage_groomParent('groomFatherImage'));
                    groomFatherImageRef.current = null;
                }}>Delete</Button>
                </Flex>
              )}
        </FormControl>
        
    </Flex>
    </Flex>
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

export default C_ParentDetails
