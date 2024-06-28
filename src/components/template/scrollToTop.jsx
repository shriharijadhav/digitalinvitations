import React, { useState, useEffect } from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Box>
      {isVisible && (
        <Button
          position="fixed"
          bottom="50px"
          right="20px"
          zIndex="1000"
          onClick={scrollToTop}
          colorScheme="pink"
          borderRadius="full"
          p="10px"
          size="lg"
          title='Go to Top'
        >
          <Icon as={FaArrowUp} />
        </Button>
      )}
    </Box>
  );
};

export default ScrollToTopButton;
