// import packages below
import React, { memo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// import utils below
import { NoteHeaderProps } from '@/common/utils/note-types';

const NoteHeader: React.FC<NoteHeaderProps> = memo(props => {
  const { onOpen } = props;

  return (
    <Box w='100%' maxW={620} mx='auto' border='1px solid #67798E' borderRadius={8}>
      <Text p={4} cursor='pointer' onClick={onOpen}>
        Take a note...
      </Text>
    </Box>
  );
});

export default NoteHeader;

NoteHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
