// packages
import React, { useState, useEffect, useCallback } from 'react';
import { Box, Input, Button, FormLabel } from '@chakra-ui/react';
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

const NoteForm: React.FC<NoteFormProps> = props => {
  const { note, onClose } = props;

  // store
  const dispatch = useAppDispatch();

  // state
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

        // dispatch
        dispatch(note ? update({ ...note, ...payload }) : create(payload));

        // close
        onClose();

        // toast
        toastSuccess(note ? 'Note updated' : 'Note added');
      } catch (error) {
        // close
        onClose();

        // toast
        toastError('Oops! An error occurred');
      }
    },
    [editorState, note, dispatch, onClose],
  );

  // set note
  useEffect(() => {
    note && setEditorState(convertToEditorState(note.body));
  }, [note]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={2}>
        <FormLabel>Title</FormLabel>
        <Input
          mb={4}
          border='none'
          borderRadius={0}
          bg='#EEF0F2'
          _focus={{
            boxShadow: 'none',
          }}
          type='text'
          {...register('title', { value: note?.title })}
        />
      </Box>
      <Box mb={2}>
        <FormLabel>Body</FormLabel>
        <Box px={4} py={2} bg='#EEF0F2'>
          <Editor editorState={editorState} onChange={setEditorState} />
        </Box>
      </Box>
      <Button
        mt={4}
        type='submit'
        color='white'
        colorScheme='black'
        bg='#353B3C'
      >
        Save
      </Button>
    </form>
  );
};

export default NoteForm;

NoteForm.propTypes = {
  note: PropTypes.any,
  onClose: PropTypes.func.isRequired,
};
