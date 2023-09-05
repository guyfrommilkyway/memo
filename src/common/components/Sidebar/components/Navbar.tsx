// import packages below
import { VStack, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

// import assets below
import { NAVBAR } from '../data'

const Navbar = () => {
  return (
    <VStack alignItems='flex-start'>
      {NAVBAR.map((item, index) => {
        return (
          <Link as={RouterLink} to={item.link} key={index}>
            {item.name}
          </Link>
        )
      })}
    </VStack>
  )
}

export default Navbar;