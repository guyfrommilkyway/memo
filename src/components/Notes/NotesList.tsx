// packages
import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

interface Props {
  children: ReactNode;
}

const NotesList: React.FC<Props> = ({ children }) => {
  return (
    <Flex wrap='wrap' gap='lg' mb='xl' px='md'>
      {children}
    </Flex>
  );
};

export default NotesList;

NotesList.propTypes = {
  children: PropTypes.any.isRequired,
};
