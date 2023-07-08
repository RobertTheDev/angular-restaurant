export default interface Testimonial {
  image: {
    uri: string;
    alt: string;
  };
  name: string;
  rating: number;
  reviewDescription: string;
}
