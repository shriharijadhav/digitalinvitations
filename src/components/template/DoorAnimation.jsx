import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const DoorAnimation = () => {
  return (
    <Flex  bg={'#f7dff7'} justify="center" align="center" w={'100%'} h="100vh">
    <motion.div
      initial={{ scale: 0 }} // Initially scaled to 0 (hidden)
      animate={{ scale: 1 }} // Scales up to 1 (fully revealed)
      transition={{ duration: 2 }} // Animation duration
      style={{ originX: 0.5, originY: 0.5 }} // Set origin at center
    >
      <Flex w="100%" h="70%">
        {/* Content inside the reveal animation */}
        <Flex className='scale-animation' rounded={'full'} outline={'7px solid white'} w="400px" h="400px" bg="purple.300" direction={'column'} gap={'20px'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} p={'40px 40px'}>
          <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'20px'} pt={'10px'}>
            <Text className='metal_Script' fontSize={'xx-large'}>Join us in celebrating our special day! </Text>
            <Text className='metal_Script' fontSize={'x-large'}>Your presence would make our day truly memorable.</Text>
          </Flex>
          <Flex justifyContent={'end'} pt={'10px'}>
                <Text className='metal_Script' fontSize={'large'}>-Digital Invitations</Text>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  </Flex>
  );
};

export default DoorAnimation;
