// packages
import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, HStack, Text } from '@chakra-ui/react';
import { User } from '@auth0/auth0-react';

import { MdPerson } from 'react-icons/md';

interface LogoutParams {
  logoutParams: { returnTo: string };
}

interface Props {
  user: User | undefined;
  onLogout: (logoutParams: LogoutParams) => void;
}

const TopbarMenu: React.FC<Props> = ({ user, onLogout }) => {
  const hoverStyle = { color: 'whiten.100', fontWeight: 'bold', bg: 'brand.500' };

  return (
    <Menu>
      <MenuButton as={Button} variant='ghost' colorScheme='transparent' bg='transparent'>
        <HStack>
          <MdPerson size={22} />
          {user?.nickname && (
            <Text color='darken.300' fontSize='sm' fontWeight='normal'>
              {user.nickname}
            </Text>
          )}
        </HStack>
      </MenuButton>
      <MenuList bg='brand.100'>
        <MenuItem bg='brand.100' _hover={hoverStyle}>
          Profile
        </MenuItem>
        <MenuItem bg='brand.100' _hover={hoverStyle}>
          Settings
        </MenuItem>
        <MenuItem
          bg='brand.100'
          _hover={{ ...hoverStyle, bg: 'red.500' }}
          onClick={() => onLogout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TopbarMenu;
