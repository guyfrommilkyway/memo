// packages
import React, { Fragment } from 'react';

// components
import NotesList from '@/components/Notes/NotesList';
import NoteItem from '@/components/Notes/NoteItem';
import NoteModalForm from '@/components/Notes/NoteModalForm';
import CustomModal from '@/components/Modal';

// helpers
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { unarchive, move } from '@/features/notes/notes-slice';

// utils
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { toastSuccess } from '@/utils/notifications';

// components
import Head from '@/components/Head';

const ArchivePage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { archive } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // archive handler
  const unarchiveHandler = (data: Note) => {
    dispatch(unarchive({ from: 'ARCHIVE', data }));
    toastSuccess('Note unarchived');
  };

  // remove handler
  const removeHandler = (data: Note) => {
    dispatch(move({ from: 'ARCHIVE', data }));
    toastSuccess('Note removed');
  };

  // close modal handler
  const closeHandler = () => {
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
                onUnarchive={() => unarchiveHandler(note)}
                onRemove={() => removeHandler(note)}
                onSelect={selectHandler}
              />
            );
          })}
        </NotesList>
      )}
      <CustomModal
        isOpen={isOpen}
        onClose={closeHandler}
        body={<NoteModalForm note={selected} onClose={closeHandler} />}
      />
    </Fragment>
  );
};

export default ArchivePage;
