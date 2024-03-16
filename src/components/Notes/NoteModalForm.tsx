// packages
import React, { useState, useEffect, useCallback } from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Editor, EditorState } from 'draft-js';
import PropTypes from 'prop-types';

// helpers
import { useAppDispatch } from '@/hooks/redux';
import { create, update } from '@/features/notes/notes-slice';
import convertToEditorState from '@/helpers/convertToEditorState';
import convertToRawState from '@/helpers/convertToRawState';

// utils
import { toastSuccess, toastError } from '@/utils/notifications';

const NoteForm: React.FC<NoteModalFormProps> = props => {
  const { note, onClose } = props;

  // store
  const dispatch = useAppDispatch();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  // hook form
  const { register, handleSubmit } = useForm<NoteFormInputs>();

  // submit handler
  const onSubmit: SubmitHandler<NoteFormInputs> = useCallback(
    data => {
      try {
        const payload = { ...data, body: convertToRawState(editorState) };

        // guard
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

  // set note
  useEffect(() => {
    if (note) setEditorState(convertToEditorState(note.body));
  }, [note]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        mb={2}
        p={0}
        fontWeight='600'
        border='none'
        _focus={{
          boxShadow: 'none',
        }}
        type='text'
        {...register('title', { value: note?.title })}
      />
      <Editor editorState={editorState} onChange={setEditorState} />
      <Flex justify='flex-end'>
        <Flex gap={2} justify='flex-end' mt={4}>
          <Button colorScheme='none' color='darken.100' onClick={onClose}>
            Close
          </Button>
          <Button type='submit' colorScheme='lavender' bg='brand.200'>
            Save
          </Button>
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
