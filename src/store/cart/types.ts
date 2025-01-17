export interface ICartItem {
  id: number;
  productName: string;
  image: string;
  description: string;
  price: number;
  priceWithDiscount?: number;
  productRate: number;
  currency?: string;
  quantity: number;
}

export interface CartInitialState {
  items: ICartItem[];
}
