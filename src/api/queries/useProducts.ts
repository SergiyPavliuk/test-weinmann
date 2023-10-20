import { UseQueryResult, useQuery } from 'react-query';
import fetchProducts from '../services/productsService';
import IProduct from '../interfaces/IProducts';
import resToProducts from '../utils/resToProducts';

const useProductsQuery: () => UseQueryResult<IProduct[], unknown> = () => {
  return useQuery(
    ['ListProductsQuery'],
    async () => {
      const res = await fetchProducts();
      return res.products.map(resToProducts);
    },
    {
      retry: false,
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );
};

export default useProductsQuery;
