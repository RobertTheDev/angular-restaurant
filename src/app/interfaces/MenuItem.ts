export default interface MenuItem {
  title: string;
  description: string;
  number: number;
  category: string;
  price: {
    currency: string;
    amount: number;
  };
}
