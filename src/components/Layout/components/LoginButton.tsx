// packages
import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant='outline'
      size='sm'
      color='brand.500'
      _hover={{ color: 'whiten.100', bg: 'brand.500' }}
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default LoginButton;
