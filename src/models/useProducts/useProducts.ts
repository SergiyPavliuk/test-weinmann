import IProduct from '../../api/interfaces/IProducts';
import useProductsQuery from '../../api/queries/useProducts';
interface UseProductsRes {
  data: IProduct[];
}
const useProducts = (): UseProductsRes => {
  const { data } = useProductsQuery();
  return {
    data: data || [],
  };
};

export default useProducts;
