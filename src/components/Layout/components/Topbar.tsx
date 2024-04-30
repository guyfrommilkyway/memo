// packages
import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './LoginButton';
import { MdMenu } from 'react-icons/md';
import TopbarMenu from './TopbarMenu';

interface Props {
  onToggle: () => void;
}

const Topbar: React.FC<Props> = ({ onToggle }) => {
  const { isAuthenticated, isLoading, logout, user } = useAuth0();

  return (
    <Flex
      as='header'
      pos='sticky'
      top={0}
      zIndex={2}
      justify='space-between'
      align='center'
      w='full'
      h='80px'
      mb='md'
      px='md'
      bg='brand.100'
    >
      <Flex align='center' cursor='pointer' userSelect='none' onClick={onToggle}>
        <MdMenu fill='#414141' size={24} />
      </Flex>
      {isAuthenticated && user && !isLoading ? <TopbarMenu onLogout={logout} user={user} /> : <LoginButton />}
    </Flex>
  );
};

export default Topbar;
