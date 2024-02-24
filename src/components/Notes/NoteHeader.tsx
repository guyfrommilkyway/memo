// packages
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NoteHeader: React.FC<NoteHeaderProps> = props => {
  const { onOpen } = props;

  return (
    <Box
      w='100%'
      maxW='480px'
      mx='auto'
      p='16px'
      borderRadius='32px'
      bg='#7B506F'
      cursor='pointer'
      userSelect='none'
      onClick={onOpen}
    >
      <Text color='#FFFFFF' fontWeight='600'>
        Take a note...
      </Text>
    </Box>
  );
};

export default NoteHeader;

NoteHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
