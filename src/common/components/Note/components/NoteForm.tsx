// import packages below
import React, { memo, useCallback } from 'react';
import { Input, Textarea, Button } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

// import helpers
import { useAppDispatch } from '@/common/hooks/redux';
import { create, update } from '@/features/note-slice';

// import utils below
import { NoteFormProps, NoteFormInputs } from '@/common/utils/note-types';

const NoteForm: React.FC<NoteFormProps> = memo((props) => {
  const { note, onClose } = props;

  // store
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors } }
    = useForm<NoteFormInputs>()

  const onSubmit: SubmitHandler<NoteFormInputs> = useCallback((data) => {
    note ? dispatch(update({ ...note, ...data })) : dispatch(create(data));
    onClose();
  }, [note, dispatch, onClose])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input mb={4} isInvalid={!!errors.title} placeholder='Title' type='text' {...register('title', { value: note && note.title, required: true })} />
      <Textarea mb={4} isInvalid={!!errors.body} placeholder='Take a note...' {...register('body', { value: note && note.body, required: true })} />
      <Button type='submit'>Save</Button>
    </form>
  )
})

export default NoteForm;