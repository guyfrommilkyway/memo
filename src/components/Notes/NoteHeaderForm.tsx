// packages
import React, { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Center, Input } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EditorState } from 'draft-js';
import PropTypes from 'prop-types';

import { Save, Close } from '@/components/Button';
import { useAppDispatch } from '@/hooks/redux';
import { create, update } from '@/features/notes/notes-slice';
import convertToEditorState from '@/helpers/convertToEditorState';
import convertToRawState from '@/helpers/convertToRawState';
import { toastSuccess, toastError } from '@/utils/notifications';
import { renderEditorDefaultState } from '@/constants/editor-state';
import DraftEditor from '../DraftEditor';

interface Props {
  note?: Note | null;
  toggle: boolean;
  onToggle: (param: boolean) => void;
}

const NoteHeaderForm: React.FC<Props> = props => {
  const { note, toggle, onToggle } = props;

  // store
  const dispatch = useAppDispatch();
  const [editorState, setEditorState] = useState(renderEditorDefaultState);

  // hook form
  const { register, handleSubmit, reset } = useForm<{ title: string }>();

  // submit handler
  const onSubmit: SubmitHandler<{ title: string }> = useCallback(
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
    setEditorState(() => EditorState.createEmpty());
  };

  // set note
  useEffect(() => {
    if (note) setEditorState(convertToEditorState(note.body));
  }, [note]);

  return (
    <Center>
      <Box
        w='full'
        maxWidth='520px'
        mx='md'
        mb='3xl'
        px='md'
        py='sm'
        bg='brand.200'
        borderRadius='lg'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='text'
            p='none'
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
                editorState={editorState}
                onChange={setEditorState}
              />
              <Flex gap='xs' justify='flex-end' mt='xs'>
                <Close color='darken.200' onClick={closeHandler}>
                  Close
                </Close>
                <Save>Save</Save>
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
