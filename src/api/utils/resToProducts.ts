import IProduct from '../interfaces/IProducts';

interface IProductResponse {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}
const resToProducts = (product: IProductResponse): IProduct => {
  return {
    id: product.id.toString(),
    title: product.title,
  };
};

export default resToProducts;
