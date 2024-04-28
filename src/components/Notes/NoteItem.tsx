// packages
import React, { memo, useCallback, useMemo } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { EditorState, convertFromRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { useLocation } from 'react-router-dom';

import {
  MdArchive,
  MdOutlineArchive,
  MdRestore,
  MdDelete,
  MdOutlineDelete,
  MdPushPin,
  MdOutlinePushPin,
} from 'react-icons/md';

interface Props {
  note: Note | null;
  onOpen: () => void;
  onSelect: (param: Note | null) => void;
  onPin?: () => void;
  onUnpin?: () => void;
  onArchive?: () => void;
  onUnarchive?: () => void;
  onRemove?: () => void;
  onRestore?: () => void;
}

const NoteItem: React.FC<Props> = memo(
  ({ note, onOpen, onSelect, onPin, onUnpin, onArchive, onUnarchive, onRemove, onRestore }) => {
    const { pathname } = useLocation();

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
        gap='md'
        maxW={{
          'base': '100%',
          'md': '100%',
          'lg': 'calc(50% - 12px)',
          'xl': 'calc(33.333% - 16px)',
          '2xl': 'calc(25% - 16px)',
        }}
        h='fit-content'
        p='md'
        rounded='lg'
        bg='brand.200'
        overflow='hidden'
        cursor='pointer'
        onClick={() => {
          if (note) onSelect(note);

          onOpen();
        }}
      >
        <Flex flexDir='column' justify='space-between' gap='md'>
          <Box pos='relative' w='100%' mb='md'>
            <Heading as='h1' mb='md' color='darken.300' fontSize='lg'>
              {note?.title}
            </Heading>
            <Box
              maxH='320px'
              color='darken.300'
              listStylePosition='inside'
              overflow='hidden'
              dangerouslySetInnerHTML={createMarkup()}
            />
            <Box pos='absolute' top={0} right={0}>
              {note && !note.pinned && pathname === '/' && (
                <Box
                  cursor='pointer'
                  onClick={e => {
                    e.stopPropagation();
                    onPin && onPin();
                  }}
                >
                  <MdOutlinePushPin fill='#414141' size={22} />
                </Box>
              )}
              {note && note.pinned && pathname === '/' && (
                <Box
                  cursor='pointer'
                  onClick={e => {
                    e.stopPropagation();
                    onUnpin && onUnpin();
                  }}
                >
                  <MdPushPin fill='#414141' size={22} />
                </Box>
              )}
            </Box>
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
                <MdOutlineArchive fill='#414141' size={22} />
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
                <MdArchive fill='#414141' size={22} />
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
                <MdRestore fill='#414141' size={22} />
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
                {pathname === '/trash' ? (
                  <MdDelete fill='#414141' size={22} />
                ) : (
                  <MdOutlineDelete fill='#414141' size={22} />
                )}
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>
    );
  },
);

export default NoteItem;

NoteItem.propTypes = {
  note: PropTypes.any,
  onOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onPin: PropTypes.func.isRequired,
  onUnpin: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  onRemove: PropTypes.func,
  onRestore: PropTypes.func,
};
