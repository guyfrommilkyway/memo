// packages
import React, { useEffect, useCallback } from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PropTypes from 'prop-types';

import DraftEditor from '../DraftEditor';
import { Save, Close } from '@/components/Button';
import { useAppDispatch } from '@/hooks/redux';
import useDraftEditor from '@/hooks/useDraftEditor';
import { create, update } from '@/features/notes-slice';
import convertToEditorState from '@/helpers/convertToEditorState';
import convertToRawState from '@/helpers/convertToRawState';
import { toastSuccess, toastError } from '@/utils/notifications';

interface Props {
  note?: Note | null;
  onClose: () => void;
}

const NoteForm: React.FC<Props> = ({ note, onClose }) => {
  const dispatch = useAppDispatch();
  const { editorState, setEditorState, handleKeyCommand, toggleInlineStyle, toggleBlockType } = useDraftEditor();

  const { register, handleSubmit } = useForm<{ title: string }>();

  const onSubmit: SubmitHandler<{ title: string }> = useCallback(
    data => {
      try {
        const payload = { ...data, body: convertToRawState(editorState) };

        if (!payload.title && !payload.body.blocks[0].text) {
          onClose();
          return;
        }

        dispatch(note ? update({ ...note, ...payload }) : create(payload));
        onClose();
        toastSuccess(note ? 'Note updated' : 'Note added');
      } catch (error) {
        onClose();
        toastError('Oops! An error occurred');
      }
    },
    [editorState, note, dispatch, onClose],
  );

  useEffect(() => {
    if (note) setEditorState(convertToEditorState(note.body));
  }, [note, setEditorState]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='text'
        mb='xs'
        p='none'
        fontSize='lg'
        fontWeight='600'
        border='none'
        placeholder='Title'
        _placeholder={{ color: 'darken.100', fontWeight: '500' }}
        _focus={{
          boxShadow: 'none',
        }}
        {...register('title', { value: note?.title })}
      />
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
      <Flex justify='flex-end'>
        <Flex justify='flex-end' gap='xs' mt='xs'>
          <Close color='darken.200' onClick={onClose} />
          <Save />
        </Flex>
      </Flex>
    </form>
  );
};

export default NoteForm;

NoteForm.propTypes = {
  note: PropTypes.any,
  onClose: PropTypes.func.isRequired,
};
