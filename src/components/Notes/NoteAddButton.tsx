// packages
import React from 'react';
import { Center, Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NoteAddButton: React.FC<NoteAddButtonProps> = props => {
  const { onOpen } = props;

  return (
    <Center>
      <Box
        w='100%'
        maxW='440px'
        mx='16px'
        mb='32px'
        p='16px'
        borderRadius='32px'
        bg='brand.200'
        cursor='pointer'
        userSelect='none'
        onClick={onOpen}
      >
        <Text color='#FFFFFF' fontWeight='600'>
          Take a note...
        </Text>
      </Box>
    </Center>
  );
};

export default NoteAddButton;

NoteAddButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
