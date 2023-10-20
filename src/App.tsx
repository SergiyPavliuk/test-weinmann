import { QueryClient, QueryClientProvider } from 'react-query';
import Products from './pages/products/Products';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
}

export default App;
