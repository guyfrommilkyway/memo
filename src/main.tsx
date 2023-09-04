// import packages below
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

// import components below
import App from './app/App.tsx'

// import helpers below
import { store } from './app/store'

// import assets below
import '@/assets/styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Suspense fallback={<span>Loading...</span>}>
          <App />
        </Suspense>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
