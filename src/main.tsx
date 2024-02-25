// packages
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { Auth0Provider } from '@auth0/auth0-react';

// components
import App from './app/App.tsx';
import LoaderScreen from '@/components/LoaderScreen';

// helpers
import { store, persistor } from './app/store';

// assets
import '@/assets/styles/globals.scss';
import '@/assets/vendors/draftjs.scss';
import '../node_modules/react-toastify/dist/ReactToastify.min.css';

// config
import theme from '@/config/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_API}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <PersistGate loading={<LoaderScreen />} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <Suspense fallback={<LoaderScreen />}>
              <HelmetProvider>
                <App />
                <ToastContainer />
              </HelmetProvider>
            </Suspense>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
);
