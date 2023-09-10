// import packages below
import React from 'react';
import { Box } from '@chakra-ui/react';

// import components below
const Navbar = React.lazy(() => import('./components/Navbar'))

const Sidebar: React.FC = () => {
  return (
    <section className='main__sidebar'>
      <Box py={8}>
        <Navbar />
      </Box>
    </section>
  )
}

export default Sidebar;