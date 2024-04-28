// packages
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Editor, EditorState, DraftHandleValue } from 'draft-js';
import DraftToolbar from './components/DraftToolbar';

interface ToolbarProps {
  toggleInlineStyle: (style: string) => void;
  toggleBlockType: (style: string) => void;
}

interface EditorProps {
  editorState: EditorState;
  onChange: React.Dispatch<React.SetStateAction<EditorState>>;
  handleKeyCommand?: (command: string, editorState: Required<EditorState>) => DraftHandleValue;
}

interface Props {
  toolbarProps: ToolbarProps;
  editorProps: EditorProps;
}

const DraftEditor: React.FC<Props> = ({ toolbarProps, editorProps }) => {
  return (
    <Box mt='sm' mb='md' p='sm' border='1px solid #787878' rounded='lg'>
      <DraftToolbar {...toolbarProps} />
      <Editor {...editorProps} />
    </Box>
  );
};

export default DraftEditor;
