import React, { useState } from 'react';
import {
  Box,
  Grid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconButton,
  Button,
  useDisclosure,
  Flex
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon, ViewIcon } from '@chakra-ui/icons';
import { BsArrowsFullscreen } from "react-icons/bs";
import { BsFullscreen } from "react-icons/bs";
import { useSelector } from 'react-redux';


// const images = [
//   'https://images.pexels.com/photos/4091280/pexels-photo-4091280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/3397026/pexels-photo-3397026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/4091280/pexels-photo-4091280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/3397026/pexels-photo-3397026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   // Add your image URLs here
// ];

// const images


const Gallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentIndex, setCurrentIndex] = useState(0);

    const liveCardData  = useSelector((store)=>store.liveCardData)
    const images = liveCardData.eventDetails.photoGallery.photoGallery
  
    const openImage = (index) => {
      setCurrentIndex(index);
      onOpen();
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <Flex m={'auto'} w={'80%'} justifyContent={'center'} alignItems={'center'}>
        <Grid m={'auto'} w={'100%'} templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={6}>
          {images.map((src, index) => (
            <Box
              key={index}
              rounded={'lg'}
              overflow={'hidden'}
              position="relative"
              cursor="pointer"
              height={['170px','200px','250px','300px']}
              transition={'all ease-in-out 0.5'}
              backgroundImage={`url(${src})`}
              backgroundSize={'cover'}
              onClick={() => openImage(index)}
              _hover={{ opacity: 0.8 ,shadow:' black 0px 5px 15px',transform:'scale(1.02)'}}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                backgroundColor="blackAlpha.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                opacity={0}
                bg={'black.200'}
                
                _hover={{ opacity: 0.9 }}
                transition="opacity 0.3s ease"
              >
                <BsFullscreen size={'20%'}/>
              </Box>
            </Box>
          ))}
        </Grid>
  
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent bg="blackAlpha.800">
            <ModalHeader>
              <ModalCloseButton  color="white" />
            </ModalHeader>
            <ModalBody display="flex" alignItems="center" justifyContent="center">
              <IconButton
                icon={<ArrowLeftIcon />}
                onClick={prevImage}
                position="absolute"
                left={["10px", "10px", "15px", "30px"]}
                colorScheme="gray"
                isRound
              />
              <Image src={images[currentIndex]} maxH="80vh" maxW="80vw" />
              <IconButton
                icon={<ArrowRightIcon />}
                onClick={nextImage}
                position="absolute"
                right={["10px", "10px", "15px", "30px"]}
                colorScheme="gray"
                isRound
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    );
  };
  
  export default Gallery;
  