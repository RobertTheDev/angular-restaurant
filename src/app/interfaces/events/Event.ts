import Image from '../image';

interface EventCard {
  images: Image[];
  slug: string;
  title: string;
  subtitle: string;
  description: string;
}

export default EventCard;
