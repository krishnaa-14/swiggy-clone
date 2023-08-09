import Body from './components/Body';
import Help from './components/Help';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Cart from './components/Cart';

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout> </AppLayout>,
      children : [
        {
          path : "/",
          element : <Body> </Body>
        },
        {
          path : "/help",
          element : <Help></Help>
        },
        {
          path : "/cart",
          element : <Cart></Cart>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  );
}

export default App;
