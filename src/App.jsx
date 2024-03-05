import { RouterProvider, createHashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Cart from './pages/Cart';

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'Cart', element: <Cart /> },
        ],
    },
]);
function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <RouterProvider router={router} />
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: '8px' }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        background: 'White',
                        color: 'black',
                        fontSize: '16px',
                        padding: '16px 24px',
                        maxWidth: '500px',
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
