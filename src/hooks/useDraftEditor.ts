// packages
import { useState } from 'react';
import { EditorState, RichUtils, DraftHandleValue } from 'draft-js';

import renderEditorDefaultState from '@/helpers/renderEditorDefaultState';

const useDraftEditor = () => {
  const [editorState, setEditorState] = useState(renderEditorDefaultState);

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(prev => RichUtils.toggleInlineStyle(prev, inlineStyle));
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(prev => RichUtils.toggleBlockType(prev, blockType));
  };

  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return { editorState, setEditorState, handleKeyCommand, toggleInlineStyle, toggleBlockType };
};

export default useDraftEditor;
