import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Image, Input, ListItem, Radio, RadioGroup, Text, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { changePriorityBetweenBrideAndGroom, deleteActualImage, deletePhotoFromGallery, makeApiCallToSaveNewCard, previousPage, proceedToNextPage, saveActualImage, saveBrideAndGroomBasicDetails, saveMediaDetails, savePhotoGallery } from '../../store/actions'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import ImageCrop from './ImageCrop'
   


  const C_PhotoGallery = () => {
    const photoGalleryRef = useRef();
 
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('1')
    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)
    const photoGallery = useSelector((store) => store.tempNewCardData.photoGallery)


    // data to send to the server
    const data = useSelector(store=>store.tempNewCardData)
     const formData = new FormData()

    if(data.brideDetails.brideActualImage){
        formData.append('brideActualImage', data.brideDetails.brideActualImage);
    }
    if(data.groomDetails.groomActualImage){
        formData.append('groomActualImage', data.groomDetails.groomActualImage);
    }
    
    if(data.userAudioFile){
        formData.append('userAudioFile',data.userAudioFile)
    }

    if(data.eventDetails.familyDetailsArray.length >0){
      data.eventDetails.familyDetailsArray.forEach((member, index) => {
        formData.append(`familyMember_[${index}]`, member.actualImage);
    });
    }
     
    formData.append('allData',JSON.stringify(data));
    //  data to send to the server ends

    photoGallery.forEach((file, index) => {
        formData.append(`photoGallery_${index}`, file);
    });
 
    



    

    const customToast = (message)=>{
        toast({
            title: `${message}`,
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
        let fileSizeExceeded = false;
      
        // Convert FileList to an array
        const filesArray = Array.from(event.target.files);
      
        const totalImages = photoGallery.length + filesArray.length
        if(totalImages > 8){
          alert('You can upload 8 images at maximum. Delete previous images to add new images');
          event.target.value = null;
          return
        }
        filesArray.forEach(file => {
          if (file.size > 4 * 1024 * 1024) {
            fileSizeExceeded = true;
          }
        });
      
        if (!fileSizeExceeded) {
          dispatch(savePhotoGallery(filesArray));
          console.log('files saved');
        } else {
          // File size exceeds 4MB, show alert to the user
          alert('File size exceeds 4MB. Please select a smaller file.');
          // Reset the file input (optional)
          event.target.value = null;
        }
      };
      

    useEffect(() => {
       
 
    },[])

  return (
    <Flex as={'form'} w={['100%','90%','90%','80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    <Flex w={'100%'}>
        <UnorderedList>
            <ListItem>
            <Text fontSize={'lg'}>Photo Gallery </Text>
            </ListItem>
        </UnorderedList>
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
                            <Text>Select an image with a minimum resolution of 700 x 700 pixels.</Text>
                            </ListItem>
                            <ListItem>
                            <Text>Upload image upto 2mb size only.</Text>
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
        <Text fontSize={'lg'}>Upload Photos that you want to showcase on invitation.</Text>
        <Flex w={'100%'} direction={'column'} gap={'10px'}>
            
            <FormControl >
                 {photoGallery.length>0 && (
                    <Flex w={'max-content'} p={'10px 0px'} direction={'column'} gap={'5px'}>
                    <Text>Gallery Images - Preview</Text>
                    <Grid p={'20px 0px'} w={'100%'} gridGap={'10px'} templateColumns={'repeat(2,1fr)'}>
                    {
                        photoGallery.map((file,index)=>(
                           <GridItem key={index} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                           <Image
                           src={URL.createObjectURL(file)}
                           alt="Bride"
                           border={'1px solid gray'}
                           p={'2px'}
                           boxSize="150px"
                           objectFit="cover"
                           mt={2}
                         />
                         <Button onClick={()=>{dispatch(deletePhotoFromGallery(index))}} w={'max-content'}>Delete</Button>
                           </GridItem>
                        ))
                    }
                    </Grid>
                    </Flex>
                  )}

                  <Input variant={'ghost'} ref={photoGalleryRef} type='file' multiple name='brideImage' onChange={handleFileChange} />
                  <FormHelperText>(You can select multiple images to upload)</FormHelperText>
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

export default C_PhotoGallery
