export interface RootState {
    user: {
      userName: string;
    };
    cart: {
      cart: CartItemType[];
    };
  }
  
  export interface CartItemType {
    id: number;
    name: string;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
  }

  
  export interface CartState {
    cart: CartItemType[];
  }
  
  export interface Pizza {
    id: number;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
  }
  
  