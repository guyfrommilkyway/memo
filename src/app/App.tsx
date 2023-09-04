// import packages below
import Layout from '@/common/components/Layout';
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import components below
import Notes from '@/pages/Notes';
import Reminders from '@/pages/Reminders';
import QuickNotes from '@/pages/QuickNotes';
import EditLabels from '@/pages/EditLabels';
import Archive from '@/pages/Archive';
import Trash from '@/pages/Trash';

// router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Notes />
      },
      {
        path: 'reminders',
        element: <Reminders />
      },
      {
        path: 'quick-notes',
        element: <QuickNotes />
      },
      {
        path: 'edit-labels',
        element: <EditLabels />
      },
      {
        path: 'archive',
        element: <Archive />
      },
      {
        path: 'trash',
        element: <Trash />
      },
    ]
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
