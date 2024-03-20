// packages
import React, { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Center, Input, Button } from '@chakra-ui/react';
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

const NoteHeaderForm: React.FC<NoteHeaderFormProps> = props => {
  const { note, toggle, onToggle } = props;

  // store
  const dispatch = useAppDispatch();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  // hook form
  const { register, handleSubmit, reset } = useForm<NoteFormInputs>();

  // submit handler
  const onSubmit: SubmitHandler<NoteFormInputs> = useCallback(
    data => {
      try {
        const payload = { ...data, body: convertToRawState(editorState) };

        // guard
        if (!payload.title && !payload.body.blocks[0].text) {
          onToggle(false);
          return;
        }

        dispatch(note ? update({ ...note, ...payload }) : create(payload));
        onToggle(false);
        toastSuccess(note ? 'Note updated' : 'Note added');
        reset();
      } catch (error) {
        onToggle(false);
        toastError('Oops! An error occurred');
      }
    },
    [editorState, note, dispatch, onToggle, reset],
  );

  const closeHandler = () => {
    onToggle(false);
    reset();
    setEditorState(EditorState.createEmpty());
  };

  // set note
  useEffect(() => {
    if (note) setEditorState(convertToEditorState(note.body));
  }, [note]);

  return (
    <Center>
      <Box
        w='100%'
        maxWidth='520px'
        mx={4}
        mb={8}
        px={4}
        py={2}
        bg='brand.300'
        borderRadius='lg'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            p={0}
            fontWeight='600'
            border='none'
            _placeholder={{ color: 'darken.100', fontWeight: '600' }}
            _focus={{
              boxShadow: 'none',
            }}
            type='text'
            placeholder={toggle ? 'Title' : 'Take a note...'}
            {...register('title', { value: note?.title })}
            onFocus={() => onToggle(true)}
          />
          {toggle && (
            <>
              <Box mt={2}>
                <Editor editorState={editorState} onChange={setEditorState} />
              </Box>
              <Flex gap={2} justify='flex-end' mt={4}>
                <Button
                  colorScheme='none'
                  color='darken.100'
                  onClick={closeHandler}
                >
                  Close
                </Button>
                <Button type='submit' colorScheme='lavender' bg='brand.200'>
                  Save
                </Button>
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
