import Testimonial from 'src/app/interfaces/Testimonial';

const testimonialsData: Testimonial[] = [
  {
    image: {
      uri: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: '',
    },
    name: 'Lee Jones',
    rating: 4,
    // eslint-disable-next-line sonarjs/no-duplicate-string
    reviewDescription: 'Really Tasty Food.',
  },
  {
    image: {
      uri: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      alt: '',
    },
    name: 'Hannah Morris',
    rating: 4,
    reviewDescription: 'Really Tasty Food.',
  },
  {
    image: {
      uri: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      alt: '',
    },
    name: 'Sean Moses',
    rating: 4,
    reviewDescription: 'Really Tasty Food.',
  },
];

export default testimonialsData;
