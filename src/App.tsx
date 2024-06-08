import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ChakraProvider } from '@chakra-ui/react';
import AuthCallback, { AuthCallbackLoader } from './pages/AuthCallback';
import Protected from './pages/Protected';
import ProfilePage from './pages/ProfilePage';
import Layout from './component/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        }, {
          path: "/auth",
          element: <AuthCallback />,
          loader: AuthCallbackLoader
        }, {
          path: "/protected",
          children: [
            {
              path: "",
              element: <Protected page={<ProfilePage />} />,
            }
          ]
        },
      ]
    }
  ]);

  return (
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  )
}

export default App
