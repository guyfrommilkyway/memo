// packages
import React, { Fragment } from 'react';

import Head from '@/components/Head';
import NotesList from '@/components/Notes/NotesList';
import NoteItem from '@/components/Notes/NoteItem';
import NoteForm from '@/components/Notes/NoteForm';
import CustomModal from '@/components/Modal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { unarchive, move } from '@/features/notes/notes-slice';
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { toastSuccess } from '@/utils/notifications';

const ArchivePage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();
  const { archive } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  const handleUnarchive = (data: Note) => {
    dispatch(unarchive({ from: 'ARCHIVE', data }));
    toastSuccess('Note unarchived');
  };

  const handleRemove = (data: Note) => {
    dispatch(move({ from: 'ARCHIVE', data }));
    toastSuccess('Note removed');
  };

  const handleClose = () => {
    clearSelectHandler();
    onClose();
  };

  return (
    <Fragment>
      <Head title='Archive' />
      {archive.length > 0 && (
        <NotesList>
          {archive.map(note => {
            return (
              <NoteItem
                key={note.id}
                note={note}
                onOpen={onOpen}
                onUnarchive={() => handleUnarchive(note)}
                onRemove={() => handleRemove(note)}
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

export default ArchivePage;
