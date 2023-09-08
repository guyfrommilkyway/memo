// import packages below
import { VStack, Link, HStack, Icon, Text } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// import assets below
import { NAVBAR } from '@/data/navbar';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <VStack alignItems='flex-start' gap={0}>
      {NAVBAR.map((item, index) => {
        const isActive = pathname === item.link;
        return (
          <Link
            as={RouterLink}
            to={item.link}
            key={index}
            w='100%'
            p={4}
            color={isActive ? 'white' : 'black'}
            borderTopRightRadius={30}
            borderBottomRightRadius={30}
            bg={isActive ? '#846A6A' : 'transparent'}
            _hover={{
              background: pathname !== item.link && '#A2999E',
            }}
          >
            <HStack>
              <Icon as={item.icon} />
              <Text as='span' display={{ base: 'none', sm: 'block' }}>
                {item.name}
              </Text>
            </HStack>
          </Link>
        );
      })}
    </VStack>
  );
};

export default Navbar;
