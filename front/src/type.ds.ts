export type TData = {
  products: TProducts;
}[];

export type TProducts = {
  _id: string;
  name: string;
  mainCategory: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  brandFa: string;
  rating: number;
  numReviews: number;
  description: string;
  discount?: string;
};

export type TNavigation = {
  name: string;
  href: string;
}[];

export type TSub = {
  name: string;
  url: string;
};

export type TPState = {
  loading: Boolean;
  product: TProducts[];
  error?: string;
};



export type TCartItem = {
  name: string
  image: string
  price: number
  discount: string
  countInStock: number
  product: string
  qty:number
};

export type TCartState={
  cartItems:TCartItem[]
}
