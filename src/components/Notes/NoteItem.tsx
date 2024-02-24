// packages
import React, { memo, useCallback, useMemo } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { EditorState, convertFromRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// assets
import {
  MdArchive,
  MdUnarchive,
  MdRestore,
  MdDeleteForever,
} from 'react-icons/md';

const NoteItem: React.FC<NoteItemProps> = memo(props => {
  const {
    note,
    onOpen,
    onSelect,
    onArchive,
    onUnarchive,
    onRemove,
    onRestore,
  } = props;

  const bodyHTML: string | null = useMemo(() => {
    if (!note) return '';

    const convertedState = convertFromRaw(note.body);
    const raw = EditorState.createWithContent(convertedState);
    const html = convertToHTML(raw.getCurrentContent());

    return html;
  }, [note]);

  const createMarkup = useCallback(() => {
    return {
      __html: bodyHTML && DOMPurify.sanitize(bodyHTML),
    };
  }, [bodyHTML]);

  return (
    <Box
      flex={{
        'base': '1 0 100%',
        'md': '1 0 100%',
        'lg': '1 0 calc(50% - 12px)',
        'xl': 'calc(33.333% - 16px)',
        '2xl': '1 0 calc(25% - 24px)',
      }}
      gap='16px'
      maxW={{
        'base': '100%',
        'md': '100%',
        'lg': 'calc(50% - 12px)',
        'xl': 'calc(33.333% - 16px)',
        '2xl': 'calc(25% - 16px)',
      }}
      borderRadius='32px'
      backgroundColor='#EAD7D1'
      overflow='hidden'
      p='24px'
      cursor='pointer'
      onClick={() => {
        if (note) onSelect(note);

        onOpen();
      }}
    >
      <Flex flexDir='column' justify='space-between' gap='16px'>
        <Box w='100%' mb='16px'>
          <Heading as='h6' mb='16px' color='#232323' fontSize='md'>
            {note?.title}
          </Heading>
          <Box
            h='100px'
            color='#232323'
            overflow='hidden'
            listStylePosition='inside'
            dangerouslySetInnerHTML={createMarkup()}
          ></Box>
        </Box>
        <Flex gap='12px'>
          {onArchive && (
            <Box
              cursor='pointer'
              onClick={e => {
                e.stopPropagation();
                onArchive();
              }}
            >
              <MdArchive color='#232323' size={24} />
            </Box>
          )}
          {onUnarchive && (
            <Box
              cursor='pointer'
              onClick={e => {
                e.stopPropagation();
                onUnarchive();
              }}
            >
              <MdUnarchive color='#232323' size={24} />
            </Box>
          )}
          {onRestore && (
            <Box
              cursor='pointer'
              onClick={e => {
                e.stopPropagation();
                onRestore();
              }}
            >
              <MdRestore color='#232323' size={24} />
            </Box>
          )}
          {onRemove && (
            <Box
              cursor='pointer'
              onClick={e => {
                e.stopPropagation();
                onRemove();
              }}
            >
              <MdDeleteForever color='#232323' size={24} />
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
});

export default NoteItem;

NoteItem.propTypes = {
  note: PropTypes.any,
  onOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  onRemove: PropTypes.func,
  onRestore: PropTypes.func,
};
