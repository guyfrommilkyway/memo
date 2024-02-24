// packages
import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// assets
import { MdNoteAdd } from 'react-icons/md';

const NoteHeader: React.FC<NoteHeaderProps> = props => {
  const { onOpen } = props;

  return (
    <HStack
      w='100%'
      maxW='475px'
      mx='auto'
      p='16px'
      borderRadius='48px'
      bg='#D6CE93'
      cursor='pointer'
      userSelect='none'
      onClick={onOpen}
    >
      <MdNoteAdd color='#232323' size='24px' />
      <Text color='#232323' fontWeight='600'>
        Take a note...
      </Text>
    </HStack>
  );
};

export default NoteHeader;

NoteHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
