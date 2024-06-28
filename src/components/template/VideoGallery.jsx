import React from 'react';
import { Grid, Box, IconButton } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import YouTube from 'react-youtube';

const videoUrls = [
  'https://www.youtube.com/watch?v=iBqzjURBEmE',
  'https://www.youtube.com/watch?v=dlI99zyFtAM',
  'https://www.youtube.com/watch?v=oCDb-O7l-Yw',
  'https://www.youtube.com/watch?v=rMfugUZD2dA',
  'https://youtu.be/oCDb-O7l-Yw?si=KM9rfeQWSOWopY0M'
  // Add your video URLs here
];

const getYoutubeId = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
};

const VideoGallery = () => {
  return (
    <Grid w={'100%'} templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
      {videoUrls.map((url, index) => {
        const videoId = getYoutubeId(url);
        return (
          <Box key={index} position="relative" rounded={'lg'} overflow={'hidden'}>
            <YouTube videoId={videoId} opts={{ width: '100%', height: '250px' }} />
            <IconButton
              icon={<ExternalLinkIcon />}
              position="absolute"
              top="10px"
              right="10px"
              colorScheme="whiteAlpha"
              onClick={() => window.open(url, '_blank')}
              aria-label="Open in new tab"
            />
          </Box>
        );
      })}
    </Grid>
  );
};

export default VideoGallery;
