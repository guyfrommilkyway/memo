// packages
import React, { Fragment, useMemo } from 'react';

// components
import Head from '@/components/Head';
import NoteHeading from '@/components/Notes/NoteHeading';
import NotesList from '@/components/Notes/NotesList';
import NoteItem from '@/components/Notes/NoteItem';
import NoteHeaderForm from '@/components/Notes/NoteHeaderForm';
import NoteForm from '@/components/Notes/NoteForm';
import CustomModal from '@/components/Modal';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { pin, unpin, move, archive } from '@/features/notes-slice';
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import useToggle from '@/hooks/useToggle';
import { toastSuccess } from '@/utils/notifications';

const NotesPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();
  const { notes } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();
  const { toggle, toggleHandler } = useToggle();

  const pinHandler = (data: Note) => {
    dispatch(pin(data));
    toastSuccess('Note pinned');
  };

  const unpinHandler = (data: Note) => {
    dispatch(unpin(data));
    toastSuccess('Note unpinned');
  };

  const archiveHandler = (data: Note) => {
    dispatch(archive({ from: 'NOTES', data }));
    toastSuccess('Note archived');
  };

  const removeHandler = (data: Note) => {
    dispatch(move({ from: 'NOTES', data }));
    toastSuccess('Note removed');
  };

  const closeModalHandler = () => {
    clearSelectHandler();
    onClose();
  };

  const pinned = useMemo(() => notes.filter((note: Note) => note.pinned), [notes]);
  const others = useMemo(() => notes.filter((note: Note) => !note.pinned), [notes]);

  return (
    <Fragment>
      <Head title='Memo' />
      <NoteHeaderForm toggle={toggle} onToggle={toggleHandler} />
      {pinned.length > 0 && (
        <>
          <NoteHeading text='Pinned' />
          <NotesList>
            {pinned.map((note: Note) => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onPin={() => pinHandler(note)}
                  onUnpin={() => unpinHandler(note)}
                  onArchive={() => archiveHandler(note)}
                  onRemove={() => removeHandler(note)}
                  onSelect={selectHandler}
                />
              );
            })}
          </NotesList>
        </>
      )}
      {others.length > 0 && (
        <>
          <NoteHeading text='Others' />
          <NotesList>
            {others.map((note: Note) => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onPin={() => pinHandler(note)}
                  onUnpin={() => unpinHandler(note)}
                  onArchive={() => archiveHandler(note)}
                  onRemove={() => removeHandler(note)}
                  onSelect={selectHandler}
                />
              );
            })}
          </NotesList>
        </>
      )}
      <CustomModal
        isOpen={isOpen}
        onClose={closeModalHandler}
        body={<NoteForm note={selected} onClose={closeModalHandler} />}
      />
    </Fragment>
  );
};

export default NotesPage;
