// import packages below
import React from 'react';

// import utils below
import { ChildrenProps } from '@/common/utils/interfaces/children-props';

const Content: React.FC<ChildrenProps> = (props) => {
  const { children } = props;

  return <section className='main__content'>{children}</section>
}

export default Content;