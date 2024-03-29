// packages
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CustomModal: React.FC<ModalProps> = props => {
  const { header, body, footer, isOpen, onClose } = props;

  return (
    <Modal size='xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt={8} bg='brand.300' borderRadius='32px'>
        {header && <ModalHeader>{header}</ModalHeader>}
        <ModalCloseButton />
        {body && <ModalBody py={4}>{body}</ModalBody>}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;

CustomModal.propTypes = {
  header: PropTypes.element,
  body: PropTypes.element,
  footer: PropTypes.element,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
