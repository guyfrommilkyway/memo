// packages
import React, { Fragment } from 'react';

import Head from '@/components/Head';
import NotesList from '@/components/Notes/NotesList';
import NoteItem from '@/components/Notes/NoteItem';
import NoteForm from '@/components/Notes/NoteForm';
import CustomModal from '@/components/Modal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { restore, remove } from '@/features/notes-slice';
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { toastSuccess } from '@/utils/notifications';

const TrashPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();
  const { trash } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  const handleRestore = (data: Note) => {
    dispatch(restore({ data }));
    toastSuccess('Note restored');
  };

  const handleRemove = (id: string) => {
    dispatch(remove({ id }));
    toastSuccess('Note removed');
  };

  const handleClose = () => {
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
                onRestore={() => handleRestore(note)}
                onRemove={() => handleRemove(note.id)}
                onSelect={selectHandler}
              />
            );
          })}
        </NotesList>
      )}
      <CustomModal isOpen={isOpen} onClose={handleClose} body={<NoteForm note={selected} onClose={handleClose} />} />
    </Fragment>
  );
};

export default TrashPage;
