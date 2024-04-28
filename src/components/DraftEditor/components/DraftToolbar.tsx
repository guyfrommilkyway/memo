// packages
import React from 'react';
import { Flex, Button } from '@chakra-ui/react';

import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatListBulleted,
  MdFormatListNumbered,
} from 'react-icons/md';

interface Props {
  toggleInlineStyle: (style: string) => void;
  toggleBlockType: (style: string) => void;
}

const DraftToolbar: React.FC<Props> = ({ toggleInlineStyle, toggleBlockType }) => {
  return (
    <Flex gap='xs' mb='md' pb='xs' borderBottom='1px solid #787878'>
      <Button
        variant='ghost'
        colorScheme='transparent'
        bg='transparent'
        size='sm'
        p='none'
        type='button'
        onClick={() => toggleInlineStyle('BOLD')}
      >
        <MdFormatBold size={22} />
      </Button>
      <Button
        variant='ghost'
        colorScheme='transparent'
        bg='transparent'
        size='sm'
        p='none'
        type='button'
        onClick={() => toggleInlineStyle('ITALIC')}
      >
        <MdFormatItalic size={22} />
      </Button>
      <Button
        variant='ghost'
        colorScheme='transparent'
        bg='transparent'
        size='sm'
        p='none'
        type='button'
        onClick={() => toggleInlineStyle('UNDERLINE')}
      >
        <MdFormatUnderlined size={22} />
      </Button>
      <Button
        variant='ghost'
        colorScheme='transparent'
        bg='transparent'
        size='sm'
        p='none'
        type='button'
        onClick={() => toggleBlockType('unordered-list-item')}
      >
        <MdFormatListBulleted size={22} />
      </Button>
      <Button
        variant='ghost'
        colorScheme='transparent'
        bg='transparent'
        size='sm'
        p='none'
        type='button'
        onClick={() => toggleBlockType('ordered-list-item')}
      >
        <MdFormatListNumbered size={22} />
      </Button>
    </Flex>
  );
};

export default DraftToolbar;
