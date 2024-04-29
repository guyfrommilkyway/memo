// packages
import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

import Head from '@/components/Head';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/', { replace: true }), 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Fragment>
      <Head title='404' />
      <Box w='100%'>
        <Text color='whiten.100'>
          <Text as='span' fontWeight='bold'>
            404.
          </Text>
          That&apos;s an error.
        </Text>
        <Text color='whiten.100'>The requested url was not found on the server.</Text>
      </Box>
    </Fragment>
  );
};

export default NotFoundPage;
