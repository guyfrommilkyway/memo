// packages
import React, { useEffect, useCallback } from 'react';
import { Box, Flex, Center, Input } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PropTypes from 'prop-types';

import DraftEditor from '../DraftEditor';
import { Save, Close } from '@/components/Button';
import { useAppDispatch } from '@/hooks/redux';
import useDraftEditor from '@/hooks/useDraftEditor';
import { create, update } from '@/features/notes/notes-slice';
import renderEditorDefaultState from '@/helpers/renderEditorDefaultState';
import convertToEditorState from '@/helpers/convertToEditorState';
import convertToRawState from '@/helpers/convertToRawState';
import { toastSuccess, toastError } from '@/utils/notifications';

interface Props {
  note?: Note | null;
  toggle: boolean;
  onToggle: (param: boolean) => void;
}

const NoteHeaderForm: React.FC<Props> = ({ note, toggle, onToggle }) => {
  const dispatch = useAppDispatch();
  const { editorState, setEditorState, handleKeyCommand, toggleInlineStyle, toggleBlockType } = useDraftEditor();
  const { register, handleSubmit, reset } = useForm<{ title: string }>();

  const onSubmit: SubmitHandler<{ title: string }> = useCallback(
    data => {
      try {
        const payload = { ...data, body: convertToRawState(editorState) };

        if (!payload.title && !payload.body.blocks[0].text) {
          onToggle(false);
          return;
        }

        dispatch(note ? update({ ...note, ...payload }) : create(payload));
        onToggle(false);
        toastSuccess(note ? 'Note updated' : 'Note added');
        setEditorState(renderEditorDefaultState);
        reset();
      } catch (error) {
        setEditorState(renderEditorDefaultState);
        onToggle(false);
        toastError('Oops! An error occurred');
      }
    },
    [editorState, setEditorState, note, dispatch, onToggle, reset],
  );

  const handleClose = () => {
    setEditorState(renderEditorDefaultState);
    onToggle(false);
    reset();
  };

  useEffect(() => {
    if (note) setEditorState(convertToEditorState(note.body));
  }, [note, setEditorState]);

  return (
    <Center>
      <Box w='full' maxWidth='520px' mx='md' mb='3xl' px='md' py='sm' bg='brand.200' borderRadius='lg'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='text'
            p='none'
            fontSize='lg'
            fontWeight='bold'
            border='none'
            placeholder={toggle ? 'Title' : 'Take a note...'}
            _placeholder={{ color: 'darken.100', fontWeight: '500' }}
            _focus={{
              boxShadow: 'none',
            }}
            onFocus={() => onToggle(true)}
            {...register('title', { value: note?.title })}
          />
          {toggle && (
            <>
              <DraftEditor
                toolbarProps={{
                  toggleInlineStyle,
                  toggleBlockType,
                }}
                editorProps={{
                  editorState,
                  onChange: setEditorState,
                  handleKeyCommand,
                }}
              />
              <Flex gap='xs' justify='flex-end' mt='xs'>
                <Close color='darken.200' onClick={handleClose} />
                <Save />
              </Flex>
            </>
          )}
        </form>
      </Box>
    </Center>
  );
};

export default NoteHeaderForm;

NoteHeaderForm.propTypes = {
  note: PropTypes.any,
  toggle: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
