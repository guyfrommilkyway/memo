// import packages below
import { Link, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

// import assets below
import { NAVBAR } from '../data'

const Navbar = () => {
  return (
    <VStack alignItems='flex-start'>
      {NAVBAR.map((item) => {
        return (
          <Link>
            <RouterLink to={item.link}>{item.name}</RouterLink>
          </Link>
        )
      })}
    </VStack>
  )
}

export default Navbar;