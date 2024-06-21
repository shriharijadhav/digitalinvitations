import React, { useState, useRef, useEffect } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop, convertToPixelCrop } from 'react-image-crop';
import { canvasPreview } from './canvasPreview'; // Adjust the path as necessary

import 'react-image-crop/dist/ReactCrop.css';
import { useDebounceEffect } from './useDebounceEffect.js';
import { Box, Button, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { function_imageUploadDoneForBride } from '../../store/actions.js';
function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export default function ImageCrop() {
  const [imgSrc, setImgSrc] = useState('');
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const hiddenAnchorRef = useRef(null);
  const blobUrlRef = useRef('');
  const fileInputRef = useRef(null);
  const [crop, setCrop] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState(undefined);
  const [croppedImageUrl, setCroppedImageUrl] = useState('');

  // flag to check if image is cropped successfully
  const dispatch = useDispatch()
  const imageUploadDoneForBride = useSelector(store=>store.tempNewCardData.brideDetails.brideImageCropDone)


  useEffect(() => {
    if(!imgSrc){
      
      onOpen();
    }
    if(imgSrc === null){
      setCroppedImageUrl('');
    }
  },[imgSrc])

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert('File size exceeds 2MB. Please upload a smaller image.');
        return;
      }

      setCrop(null); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(file);
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function onUploadCroppedImage(blob) {
    // Replace this with your upload logic
    console.log('Uploading cropped image', blob);

    // Example: Upload using fetch to a server endpoint
    const formData = new FormData();
    formData.append('croppedImage', blob, 'croppedImage.png');

    try {
      console.log(blob,croppedImage)

      const response = await fetch('/upload-endpoint', {
        method: 'POST',
        body: formData,
      });

      
      if (!response.ok) {
        throw new Error('Upload failed');
      }

      console.log('Upload successful');
    } catch (error) {
      // console.error('Error uploading the cropped image', error);
    }
  }

  async function onCropClick() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error('Crop canvas does not exist');
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext('2d');
    if (!ctx) {
      throw new Error('No 2d context');
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );

    const blob = await offscreen.convertToBlob({
      type: 'image/png'
    });

    // Upload the cropped image
    await onUploadCroppedImage(blob);

    // Display the cropped image on the UI
    const croppedImageUrl = URL.createObjectURL(blob);
    setCroppedImageUrl(croppedImageUrl);

    // Remove the original image
    setImgSrc('');
    setCrop(null);
    setCompletedCrop(null);
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else {
      setAspect(16 / 9);

      if (imgRef.current) {
        const { width, height } = imgRef.current;
        const newCrop = centerAspectCrop(width, height, 16 / 9);
        setCrop(newCrop);
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
    }
  }

  function handleRemoveClick() {
    setCroppedImageUrl('');
    setImgSrc('');
    setCrop(null);
    setCompletedCrop(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    dispatch(function_imageUploadDoneForBride(false));

  }
  const toast = useToast()

  function isCropArea250x250(crop) {
    // Extract crop values
    let { x, y, width, height } = crop;

    // Assuming the screen width and height are 100px each for 100%
    let screenWidthInPixels = 100; // Example: Replace with actual screen width in pixels
    let screenHeightInPixels = 100; // Example: Replace with actual screen height in pixels

    // Calculate dimensions in pixels
    let widthInPixels = (width /10) * screenWidthInPixels;
    let heightInPixels = (height /10) * screenHeightInPixels;

    console.log(widthInPixels, heightInPixels);
    // Check if the dimensions match 250px by 250px
    return (widthInPixels>= 500 && heightInPixels>= 500);
}

  const { isOpen, onOpen, onClose } = useDisclosure();
  const customToast = (message)=>{
    toast({
        title: `${message}`,
        status: 'warning',
        position: 'top-right',
        isClosable: true,
      })
}
  const handleCloseForCrop = ()=>{
    console.log(crop)
    if(crop){
      console.log(isCropArea250x250(crop))
      if(isCropArea250x250(crop)){
        onCropClick()
        dispatch(function_imageUploadDoneForBride(true));
        onClose()
      }else{
        dispatch(function_imageUploadDoneForBride(false));

        customToast('Please select larger area for image cropping')
        customToast('Selected area is smaller than 500x500 px. ')
      }
    }else{
     customToast('Please select area for image cropping.')
     dispatch(function_imageUploadDoneForBride(false));

    }
  }

  return (
    <Flex w={'100%'} direction={'column'}  gap={'20px'} p={'20px 20px'} className="App">
      {/*<div className="instructions">
        <h3>Photo Upload Instructions</h3>
        <ul>
          <li>Please upload a photo where your face is clearly visible.</li>
          <li>The image should be in JPEG or PNG format.</li>
          <li>The maximum file size allowed is 2MB.</li>
        </ul>
      </div>*/}
      <div className="Crop-Controls">
        <input ref={fileInputRef} type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      {!!imgSrc && (
        <Flex p={'20px 20px'}>

        <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
             
            <Flex w={'100%'}>
 
            <Modal  closeOnOverlayClick={false} size={'full'} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent  >
               <Flex p={'10px 0px'}   w={'100%'} justifyContent={'center'} bg={'indigo'}>
                <Flex w={'80%'} justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize={'xl'} display={['none','none','flex','flex']}>Select area to crop the image</Text>
                <Text fontSize={'xl'} display={['flex','flex','none','none']}>Crop Image</Text>

                <Flex gap={'10px'}>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleCloseForCrop}>Crop</Button>
                </Flex>
                </Flex>
               </Flex>
                <ModalBody w={'100%'} gap={'20px'} display={'flex'} flexDirection={['column-reverse','column-reverse','row','row']} justifyContent={'center'} alignItems={'center'} pb={6}>
                    <Box direction={['column-reverse','column-reverse','row','row']} gap={'30px'} w={'50%'} bg={'rebeccapurple'} justifyContent={'center'} alignItems={'center'} p={'20px 0px'}>
                        <ReactCrop
                        crop={crop}
                        onChange={(_, percentCrop) => setCrop(percentCrop)}
                        onComplete={(c) => setCompletedCrop(c)}
                        aspect={aspect}
                      >
                        <img
                          ref={imgRef}
                          alt="Crop me"
                          src={imgSrc}
                          style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                          onLoad={onImageLoad}
                        />
                      </ReactCrop>
                    </Box>
                    {!!completedCrop && (
                      <Flex w={'40%'} bg={'rebeccapurple'} justifyContent={'center'} gap={'10px'} direction={'column'} alignItems={'center'}>
                      <Text fontSize={'lg'}>Cropped Image</Text>
                        <div>
                          <canvas
                            ref={previewCanvasRef}
                            style={{
                              border: '1px solid black',
                              objectFit: 'contain',
                              width: completedCrop.width,
                              height: completedCrop.height
                            }}
                          />
                        </div>
                        <div>
                        </div>
                      </Flex>
                    )}
                </ModalBody>
      
                <ModalFooter gap={'20px'}>
                  
                  <Button colorScheme='blue' mr={3} 
                  
                  onClick={handleCloseForCrop}
                  >
                    Crop
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </Flex>
        </Flex>
    </Flex>

        </Flex>
      )}
      
      {croppedImageUrl && (
        <Flex  gap={'10px'} direction={'column'} >
          <Text p={'3px 0px'}>Selected Image</Text>
          <Flex w={'max-content'} p={'5px'} border={'1px solid white'}>
          <div
          style={{
             width: '250px',
            height: '250px',
            backgroundImage: `url(${croppedImageUrl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat'
          }}
        ></div>
          </Flex>
          <Button w={'max-content'}  onClick={handleRemoveClick}>Remove</Button>
        </Flex>
      )}
    </Flex>
  );
}
