import axiosInstance from '../axiosConfig';
import ApiPaths from '../config/ApiPaths';

const fetchProducts = async () => {
  const response = await axiosInstance.get(ApiPaths.getProducts);
  return response.data;
};

export default fetchProducts;
