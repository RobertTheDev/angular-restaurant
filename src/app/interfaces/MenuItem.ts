export default interface MenuItem {
  name: string;
  description: string;
  number: number;
  category: string;
  price: {
    currency: string;
    amount: number;
  };
}
