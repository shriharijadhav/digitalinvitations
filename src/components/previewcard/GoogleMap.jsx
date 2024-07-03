import { Flex } from '@chakra-ui/react';
import React from 'react';

import '../../App.css'

const GoogleMap = ({ mapUrl }) => {
  const iframeStyle = {
    width: '100%',
    height: '400px', // Adjust height as needed
    border: 'none'
  };
   return (
    <Flex w={['90%','90%','80%','80%']} _hover={{transition:'all ease-in-out 0.1s',transform:'scale(1.01)',shadow: 'rgba(0, 0, 0, 0.56) 0px 20px 60px 4px'}} rounded={'lg'}>
    <iframe width={'100%'} className='responsive-map'  src={mapUrl}></iframe>
    </Flex>
  );
};

 
export default GoogleMap;
