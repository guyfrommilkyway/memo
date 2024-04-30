// packages
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import NotesPage from '@/pages/Notes';
import ArchivePage from '@/pages/Archive';
import TrashPage from '@/pages/Trash';
import NotFoundPage from '@/pages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<NotesPage />} />
          <Route path='/archive' element={<ArchivePage />} />
          <Route path='/trash' element={<TrashPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
