// packages
import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

// component
import Head from '@/components/Head';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/', { replace: true }), 5000);
  }, [navigate]);

  return (
    <Fragment>
      <Head title='404' />
      <Box w='100%'>
        <Text>
          <Text as='span' fontWeight='bold'>
            404.
          </Text>{' '}
          That&apos;s an error.
        </Text>
        <Text>The requested url was not found on the server.</Text>
      </Box>
    </Fragment>
  );
};

export default NotFoundPage;
