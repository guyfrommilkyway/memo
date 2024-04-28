// packages
import React from 'react';
import {
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

// assets
import { FiLogOut } from 'react-icons/fi';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <Popover>
      <PopoverTrigger>
        <Button size='sm' colorScheme='red'>
          <FiLogOut size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation</PopoverHeader>
        <PopoverBody py={4}>
          <Text>Are you sure you want to log out?</Text>
        </PopoverBody>
        <PopoverFooter>
          <Button
            size='sm'
            colorScheme='red'
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Log out
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default LogoutButton;
