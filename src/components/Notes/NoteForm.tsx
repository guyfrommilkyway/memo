// packages
import React, { useState, useEffect, useCallback } from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PropTypes from 'prop-types';

import DraftEditor from '../DraftEditor';
import { Save, Close } from '@/components/Button';
import { useAppDispatch } from '@/hooks/redux';
import { create, update } from '@/features/notes/notes-slice';
import convertToEditorState from '@/helpers/convertToEditorState';
import convertToRawState from '@/helpers/convertToRawState';
import { toastSuccess, toastError } from '@/utils/notifications';
import { renderEditorDefaultState } from '@/constants/editor-state';

interface Props {
  note?: Note | null;
  onClose: () => void;
}

const NoteForm: React.FC<Props> = ({ note, onClose }) => {
  const dispatch = useAppDispatch();
  const [editorState, setEditorState] = useState(renderEditorDefaultState);
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
  }, [note]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='text'
        mb='xs'
        p='none'
        fontWeight='600'
        border='none'
        placeholder='Title'
        _placeholder={{ color: 'darken.100', fontWeight: '500' }}
        _focus={{
          boxShadow: 'none',
        }}
        {...register('title', { value: note?.title })}
      />
      <DraftEditor editorState={editorState} onChange={setEditorState} />
      <Flex justify='flex-end'>
        <Flex justify='flex-end' gap='xs' mt='xs'>
          <Close color='darken.200' onClick={onClose}>
            Close
          </Close>
          <Save type='submit'>Save</Save>
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
