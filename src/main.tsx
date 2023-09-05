// import packages below
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async';

// import components below
import App from './app/App.tsx'

// import helpers below
import { store, persistor } from './app/store'

// import assets below
import '@/assets/styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Suspense fallback={<span>Loading...</span>}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </Suspense>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
