// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import NotesList from '@/components/Notes/NotesList';
import NoteItem from '@/components/Notes/NoteItem';
import NoteForm from '@/components/Notes/NoteForm';
import CustomModal from '@/components/Modal';

// helpers
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { restore, remove } from '@/features/notes/notes-slice';

// utils
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { toastSuccess } from '@/utils/notifications';

const TrashPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { trash } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // archive handler
  const restoreHandler = (data: Note) => {
    dispatch(restore({ data }));
    toastSuccess('Note restored');
  };

  // remove handler
  const removeHandler = (id: string) => {
    dispatch(remove({ id }));
    toastSuccess('Note removed');
  };

  // close modal handler
  const closeHandler = () => {
    clearSelectHandler();
    onClose();
  };

  return (
    <Fragment>
      <Head title='Trash' />
      {trash.length > 0 && (
        <NotesList>
          {trash.map(note => {
            return (
              <NoteItem
                key={note.id}
                note={note}
                onOpen={onOpen}
                onRestore={() => restoreHandler(note)}
                onRemove={() => removeHandler(note.id)}
                onSelect={selectHandler}
              />
            );
          })}
        </NotesList>
      )}
      <CustomModal isOpen={isOpen} onClose={closeHandler} body={<NoteForm note={selected} onClose={closeHandler} />} />
    </Fragment>
  );
};

export default TrashPage;
