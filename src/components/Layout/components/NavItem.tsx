// packages
import React, { memo } from 'react';
import { Link } from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import PropTypes from 'prop-types';

interface Props {
  name: string;
  link: string;
  active: boolean;
}

const NavItem: React.FC<Props> = memo(({ name, link, active = false }) => {
  return (
    <Link
      as={RLink}
      to={link}
      w='100%'
      p='16px'
      fontWeight={active ? 'bold' : 'normal'}
      borderTopRightRadius='xl'
      borderBottomRightRadius='xl'
      bg={active ? 'brand.500' : 'transparent'}
      transition='background-color 0.5s, color 0.5s'
      _hover={{
        fontWeight: 'bold',
        backgroundColor: !active && 'brand.200',
      }}
    >
      {name}
    </Link>
  );
});

export default NavItem;

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
