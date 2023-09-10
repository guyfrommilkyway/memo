// import packages below
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components below
import PublicRoute from '@/components/PublicRoute';
import ProtectedRoute from '@/components/ProtectedRoute';
import Layout from '@/components/Layout';
import Notes from '@/pages/Notes';
const Login = React.lazy(() => {
  return Promise.all([import('@/pages/Login'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});
const SignUp = React.lazy(() => {
  return Promise.all([import('@/pages/SignUp'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});
const Archive = React.lazy(() => {
  return Promise.all([import('@/pages/Archive'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});
const Trash = React.lazy(() => {
  return Promise.all([import('@/pages/Trash'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});
const NotFound = React.lazy(() => {
  return Promise.all([import('@/pages/NotFound'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path='/' element={<Notes />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/trash' element={<Trash />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
