import { Flex } from '@chakra-ui/react';
import React from 'react';

const GoogleMap = ({ mapUrl }) => {
  const iframeStyle = {
    width: '100%',
    height: '400px', // Adjust height as needed
    border: 'none'
  };

  return (
    <Flex w={['90%','90%','80%','80%']}>
    <iframe width={'100%'} height={'400px'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.159102640729!2d75.30998757490043!3d17.68994259401927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc417fd3db3e443%3A0xb3f139625e8e9301!2sShrinath%20Palace%20Mangal%20Karyalaya!5e0!3m2!1sen!2sin!4v1719570927561!5m2!1sen!2sin"></iframe>
    </Flex>
  );
};

export default GoogleMap;
