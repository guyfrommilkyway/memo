// import packages below
import React, { Fragment, memo, useCallback, useMemo } from 'react';
import { Box, Button, Heading, Menu, MenuButton, MenuList, MenuItem, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// import utils below
import { NoteItemProps } from '@/common/utils/note-types';
import { EditorState, convertFromRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

// import assets below
import { BiDotsVerticalRounded } from 'react-icons/bi';

const NoteItem: React.FC<NoteItemProps> = memo(props => {
  const { note, onOpen, onRemove, onSelect } = props;

  const bodyHTML: string = useMemo(() => {
    if (note === undefined) return '';

    const convertedState = convertFromRaw(note.body);
    const raw = EditorState.createWithContent(convertedState);
    const html = convertToHTML(raw.getCurrentContent());

    return html;
  }, [note]);

  const createMarkup = useCallback(() => {
    return {
      __html: DOMPurify.sanitize(bodyHTML),
    };
  }, [bodyHTML]);

  return (
    <Fragment>
      <Box
        className='note__note-item'
        flex={{
          'base': '1 0 100%',
          'md': '1 0 50%',
          'lg': '1 0 33%',
          '2xl': '1 0 20%',
        }}
        maxW={{
          'base': '100%',
          'md': 'calc(50% - 8px)',
          'lg': 'calc(33% - 10px)',
          '2xl': 'calc(20% - 13px)',
        }}
        h='fit-content'
        border='1px solid #67798E'
        borderRadius={8}
      >
        <VStack
          justify='space-between'
          alignItems='flex-start'
          w='100%'
          h='100%'
          cursor='pointer'
          onClick={() => {
            note && onSelect(note);
            onOpen();
          }}
        >
          <Box w='100%' pt={4} px={4}>
            <Heading as='h6' mb={2} fontSize='xl'>
              {note && note.title}
            </Heading>
            <Box listStylePosition='inside' dangerouslySetInnerHTML={createMarkup()}></Box>
          </Box>
          <Menu>
            <MenuButton as={Button} variant='ghost' size='sm' ml='auto' colorScheme='transparent'>
              <BiDotsVerticalRounded size={24} />
            </MenuButton>
            <MenuList>
              <MenuItem>Archive</MenuItem>
              <MenuItem onClick={() => note && onRemove(note.id)}>Move to trash</MenuItem>
            </MenuList>
          </Menu>
        </VStack>
      </Box>
    </Fragment>
  );
});

export default NoteItem;

NoteItem.propTypes = {
  note: PropTypes.any,
  onOpen: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
