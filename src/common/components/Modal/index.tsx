// import packages below
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

// import utils below
import { ModalProps } from '@/common/utils/types';

const CustomModal: React.FC<ModalProps> = (props) => {
  const { header, body, footer, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt={8}>
        {header && (
          <ModalHeader>
            {header}
          </ModalHeader>
        )}
        <ModalCloseButton />
        {body && (
          <ModalBody py={4}>
            {body}
          </ModalBody>
        )}
        {footer && (
          <ModalFooter>
            {footer}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal >
  )
}

export default CustomModal;