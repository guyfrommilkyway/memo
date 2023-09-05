// import packages below
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components below
import PublicRoute from '@/common/components/PublicRoute';
import ProtectedRoute from '@/common/components/ProtectedRoute';
import Layout from '@/common/components/Layout';
import Notes from '@/pages/Notes';
import Reminders from '@/pages/Reminders';
import QuickNotes from '@/pages/QuickNotes';
import EditLabels from '@/pages/EditLabels';
import Archive from '@/pages/Archive';
import Trash from '@/pages/Trash';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<div>Login Page</div>} />
          <Route path='/sign-up' element={<div>Sign Up Page</div>} />
        </Route>
        <Route element={<ProtectedRoute />} >
          <Route element={<Layout />}>
            <Route path='/' element={<Notes />} />
            <Route path='/reminders' element={<Reminders />} />
            <Route path='/quick-notes' element={<QuickNotes />} />
            <Route path='/edit-labels' element={<EditLabels />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/trash' element={<Trash />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
