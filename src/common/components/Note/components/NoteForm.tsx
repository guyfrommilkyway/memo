// import packages below
import React, { memo, useState, useEffect, useCallback } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import PropTypes from 'prop-types';

// import helpers
import { useAppDispatch } from '@/common/hooks/redux';
import { create, update } from '@/features/note-slice';
import convertToEditorState from '@/common/helpers/convertToEditorState';
import convertToRawState from '@/common/helpers/convertToRawState';

// import utils below
import { NoteFormProps, NoteFormInputs } from '@/common/utils/note-types';

const NoteForm: React.FC<NoteFormProps> = memo(props => {
  const { note, onClose, onReset } = props;

  // store
  const dispatch = useAppDispatch();

  // state
  const [editorState, setEditorState] = useState<EditorState>();

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteFormInputs>();

  const onSubmit: SubmitHandler<NoteFormInputs> = useCallback(
    data => {
      const payload = {
        title: data.title,
        body: editorState && convertToRawState(editorState),
      };

      note ? dispatch(update({ ...note, ...payload })) : dispatch(create(payload));
      onReset(null);
      onClose();
    },
    [editorState, note, dispatch, onReset, onClose],
  );

  // set initial editor state
  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);

  // set note
  useEffect(() => {
    note && setEditorState(convertToEditorState(note?.body));
  }, [note]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        mb={4}
        isInvalid={!!errors.title}
        placeholder='Title'
        type='text'
        {...register('title', { value: note?.title, required: true })}
      />
      <Box border='1px solid #e2e8f0'>
        <Editor
          editorState={editorState}
          toolbarClassName='toolbarClassName'
          wrapperClassName='wrapperClassName'
          editorClassName='editorClassName'
          onEditorStateChange={param => setEditorState(param)}
          toolbar={{
            options: ['inline', 'list'],
            inline: {
              options: ['bold', 'italic', 'underline'],
            },
            list: {
              options: ['unordered', 'ordered'],
            },
          }}
        />
      </Box>
      <Button mt={8} type='submit' color='white' colorScheme='black' bg='#353B3C'>
        Save
      </Button>
    </form>
  );
});

export default NoteForm;

NoteForm.propTypes = {
  note: PropTypes.any,
  onReset: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
