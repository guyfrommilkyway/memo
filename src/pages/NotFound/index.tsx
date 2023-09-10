// import packages below
import React, { Fragment, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

// import component below
import Head from '@/components/Head';

const NotFound: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/', { replace: true }), 2000);
  }, [navigate]);

  return (
    <Fragment>
      <Head title='404' />
      <Box w='100%' maxW='320px'>
        <Text>
          <Text as='span' fontWeight='bold'>
            404.
          </Text>{' '}
          That&apos;s an error.
        </Text>
        <Text>
          The requested url{' '}
          <Text as='span' fontWeight='bold' textDecor='underline'>
            {pathname}
          </Text>{' '}
          was not found on the server. That&apos;s all we know.
        </Text>
      </Box>
    </Fragment>
  );
};

export default NotFound;
