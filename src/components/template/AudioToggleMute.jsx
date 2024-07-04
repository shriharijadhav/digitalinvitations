import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { GiMusicalNotes } from "react-icons/gi";
import { MdMusicOff } from "react-icons/md";

const AudioToggleMute = () => {
  const audioUrl = 'https://res.cloudinary.com/df4prcuev/video/upload/v1719899292/digitalInvitations/allAudioFiles/ukglpkpdvrx7n5bnxjcn.webm';
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    
    if (audioElement) {
      if (isAudioPlaying) {
        audioElement.play().catch(err => {
          console.error("Failed to play audio: ", err);
        });
      } else {
        audioElement.pause();
      }
      
      const handleAudioEnd = () => {
        setIsAudioPlaying(true);
        audioElement.currentTime = 0;
        audioElement.play().catch(err => {
          console.error("Failed to replay audio: ", err);
        });
      };
      
      audioElement.addEventListener('ended', handleAudioEnd);
      
      return () => {
        audioElement.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, [isAudioPlaying]);

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <Flex>
      <Box as="audio" ref={audioRef} controls={true} width="100%">
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </Box>

      <Box>
        <Button
          position="fixed"
          bottom="40px"
          left="20px"
          zIndex="1000"
          colorScheme="pink"
          borderRadius="full"
          p="10px"
          size={["md"]}
          onClick={toggleAudio}
          title={isAudioPlaying ? 'Mute' : 'Unmute'}
        >
          <Icon className={isAudioPlaying ? 'pulse-animation' : ''} as={isAudioPlaying ? GiMusicalNotes : MdMusicOff} />
        </Button>
      </Box>
    </Flex>
  );
};

export default AudioToggleMute;
