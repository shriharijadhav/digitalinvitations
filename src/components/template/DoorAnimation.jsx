import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const DoorAnimation = () => {
  const animationDuration = 3; // Animation duration in seconds

  return (
    <Flex bg="#f7dff7" justify="center" align="center" w="100%" h="100vh">
      <motion.div
        initial={{ scale: 0 }} // Initially scaled to 0 (hidden)
        animate={{ scale: 1 }} // Scales up to 1 (fully revealed)
        transition={{ duration: 3 }} // Animation duration
        style={{ originX: 0.5, originY: 0.5 }} // Set origin at center
      >
        <Flex
          w="100%"
          h="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="50px"
        >
          {/* Content inside the reveal animation */}
          <Flex
            className="scale-animation"
            rounded="full"
            outline="5px solid white"
            w="400px"
            h="400px"
            bg="purple.300"
            direction="column"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            p="40px"
          >
            <Flex justifyContent="center" alignItems="center" direction="column" gap="20px" pt="10px">
              <Text className="metal_Script" fontSize="xx-large">
                Join us in celebrating our special day!
              </Text>
              <Text className="metal_Script" fontSize="x-large">
                Your presence would make our day truly memorable.
              </Text>
            </Flex>
            <Flex justifyContent="end" pt="10px">
              <Text className="metal_Script" fontSize="large">
                -Digital Invitations
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>

      {/* Delayed text display after animation ends */}
      <motion.div
        initial={{ opacity: 0 }} // Initially hidden
        animate={{ opacity: 1 }} // Fade in after animation ends
        transition={{ delay: 1.5, duration: 0.5 }} // Delay before fading in
        style={{ position: 'absolute', bottom: '70px' }} // Adjust position as needed
      >
        <Flex direction="column" color="purple" justifyContent="center" alignItems="center" gap="5px">
          <Text>Please refresh in case you are stuck on this screen.</Text>
          <Text>Please make sure the card link is correct.</Text>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default DoorAnimation;
