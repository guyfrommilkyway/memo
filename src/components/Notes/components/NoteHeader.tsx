// packages
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NoteHeader: React.FC<NoteHeaderProps> = props => {
  const { onOpen } = props;

  return (
    <Box
      w='100%'
      maxW={620}
      h='fit-content'
      mx='auto'
      p={4}
      borderRadius={8}
      bg='#EEF0F2'
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      cursor='pointer'
      onClick={onOpen}
    >
      <Text>Take a note...</Text>
    </Box>
  );
};

export default NoteHeader;

NoteHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
