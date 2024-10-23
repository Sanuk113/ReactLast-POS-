export interface Transaction {
    id: number;
    items: CartItem[];
    totalAmount: number;
    date: Date;
    cashier: User;
  }
  