// packages
import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import { MdPerson } from 'react-icons/md';

interface LogoutParams {
  logoutParams: { returnTo: string };
}

interface Props {
  onLogout: (logoutParams: LogoutParams) => void;
}

const TopbarMenu: React.FC<Props> = ({ onLogout }) => {
  return (
    <Menu>
      <MenuButton as={Button} variant='ghost' colorScheme='transparent' bg='transparent'>
        <MdPerson size={24} />
      </MenuButton>
      <MenuList bg='brand.100'>
        <MenuItem bg='brand.100' _hover={{ color: 'whiten.100', fontWeight: 'bold', bg: 'brand.500' }}>
          Profile
        </MenuItem>
        <MenuItem bg='brand.100' _hover={{ color: 'whiten.100', fontWeight: 'bold', bg: 'brand.500' }}>
          Settings
        </MenuItem>
        <MenuItem bg='brand.100' _hover={{ bg: 'transparent' }}>
          <Button
            variant='outline'
            size='sm'
            colorScheme='red'
            onClick={() => onLogout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Log out
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TopbarMenu;
