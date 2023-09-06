// import packages below
import React from 'react';

// import utils below
import { ChildrenProps } from '@/common/utils/types';
import { Box } from '@chakra-ui/react';

const Content: React.FC<ChildrenProps> = (props) => {
  const { children } = props;

  return (
    <section className='main__content'>
      <Box p={8}>
        {children}
      </Box>
    </section>
  )
}

export default Content;