// packages
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// components
import PublicRoute from '@/components/PublicRoute';
import ProtectedRoute from '@/components/ProtectedRoute';
import Layout from '@/components/Layout';
import NotesPage from '@/pages/Notes';
import LoginPage from '@/pages/Login';
import ArchivePage from '@/pages/Archive';
import TrashPage from '@/pages/Trash';
import NotFoundPage from '@/pages/NotFound';

const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            />
          }
        >
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            />
          }
        >
          <Route element={<Layout />}>
            <Route path='/' element={<NotesPage />} />
            <Route path='/archive' element={<ArchivePage />} />
            <Route path='/trash' element={<TrashPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
