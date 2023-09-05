// import packages below
import { useDisclosure } from '@chakra-ui/react';

const useModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return { isOpen, onOpen, onClose };
};

export default useModal;
