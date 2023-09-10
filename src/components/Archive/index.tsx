// import packages below
import React, { Fragment, useState } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
import NotesList from '@/common/components/Notes/components/NotesList';
import NoteItem from '@/common/components/Notes/components/NoteItem';
const NoteForm = React.lazy(() => import('@/common/components/Notes/components/NoteForm'));
const CustomModal = React.lazy(() => import('@/common/components/Modal'));

// import helpers below
import { useAppDispatch, useAppSelector } from '@/common/hooks/redux';
import { unarchive, move } from '@/features/notes/notes-slice';

// import utils below
import useModal from '@/common/hooks/useModal';
import { Note } from '@/common/types/note-types';

const Archive: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();

  // store
  const { archive } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // state
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  return (
    <Fragment>
      <Box className='note'>
        {archive.length > 0 && (
          <NotesList
            render={archive.map(note => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onUnarchive={() => dispatch(unarchive({ data: note }))}
                  onRemove={() => dispatch(move({ from: 'ARCHIVE', data: note }))}
                  onSelect={setSelectedNote}
                />
              );
            })}
          />
        )}
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        body={<NoteForm note={selectedNote} onClose={onClose} onReset={setSelectedNote} />}
      />
    </Fragment>
  );
};

export default Archive;
