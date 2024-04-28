// packages
import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

const Save: React.FC<ButtonProps> = props => {
  return (
    <Button type='submit' colorScheme='orange' bg='brand.500' {...props}>
      Save
    </Button>
  );
};

const Close: React.FC<ButtonProps> = props => {
  return (
    <Button
      variant='ghost'
      colorScheme='transparent'
      bg='transparent'
      {...props}
    >
      Close
    </Button>
  );
};

export { Save, Close };
