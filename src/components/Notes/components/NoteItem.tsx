// packages
import React, { Fragment, memo, useCallback, useMemo } from 'react';
import { Box, Flex, VStack, Button, Heading, Fade } from '@chakra-ui/react';
import { EditorState, convertFromRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// utils
import useToggle from '@/hooks/useToggle';

// assets
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

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

  // state
  const { toggle, toggleHandler } = useToggle();

  const bodyHTML: string | null = useMemo(() => {
    if (note) {
      const convertedState = convertFromRaw(note.body);
      const raw = EditorState.createWithContent(convertedState);
      const html = convertToHTML(raw.getCurrentContent());

      return html;
    }

    return '';
  }, [note]);

  const createMarkup = useCallback(() => {
    return {
      __html: bodyHTML && DOMPurify.sanitize(bodyHTML),
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
        borderRadius={8}
        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
        background='#EEF0F2'
        overflow='hidden'
        onMouseOver={() => toggleHandler(true)}
        onMouseOut={() => toggleHandler(false)}
      >
        <VStack
          justify='space-between'
          alignItems='flex-start'
          w='100%'
          h='100%'
        >
          <Box
            w='100%'
            py={4}
            px={4}
            cursor='pointer'
            onClick={() => {
              note && onSelect(note);
              onOpen();
            }}
          >
            <Heading as='h6' mb={2} fontSize='xl'>
              {note && note.title}
            </Heading>
            <Box
              listStylePosition='inside'
              dangerouslySetInnerHTML={createMarkup()}
            ></Box>
          </Box>
          <Fade in={toggle}>
            <Flex justify='flex-end' flexWrap='wrap' w='100%' px={2}>
              {onArchive && (
                <Button
                  variant='ghost'
                  colorScheme='transparent'
                  p={0}
                  bg='transparent'
                  onClick={onArchive}
                >
                  <BiArchiveIn />
                </Button>
              )}
              {onUnarchive && (
                <Button
                  variant='ghost'
                  colorScheme='transparent'
                  p={0}
                  bg='transparent'
                  onClick={onUnarchive}
                >
                  <BiArchiveOut />
                </Button>
              )}
              {onRestore && (
                <Button
                  variant='ghost'
                  colorScheme='transparent'
                  p={0}
                  bg='transparent'
                  onClick={onRestore}
                >
                  <RiArrowGoBackFill />
                </Button>
              )}
              {onRemove && (
                <Button
                  variant='ghost'
                  colorScheme='transparent'
                  p={0}
                  bg='transparent'
                  onClick={onRemove}
                >
                  <FiTrash2 />
                </Button>
              )}
            </Flex>
          </Fade>
        </VStack>
      </Box>
    </Fragment>
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
