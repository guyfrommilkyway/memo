// import packages below
import React from 'react';

// import components below
const Navbar = React.lazy(() => import('./components/Navbar'))

const Sidebar: React.FC = () => {
  return (
    <section className='main__sidebar'>
      <Navbar />
    </section>
  )
}

export default Sidebar;