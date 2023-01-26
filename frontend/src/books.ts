import {Book} from './app/shared/models/Book';

export const sample_books: Book[] = [
  {
    id:'1',
    name: 'Temple',
    author: 'Matthew Reilly',
    favourite: false,
    stars: 4.5,
    imageUrl: 'assets/covers/matthew-reilly-temple.jpg',
    categories: ['Action', 'Fast Paced', 'Fiction'],
  },
  {
    id:'2',
    name: 'The Great Zoo of China',
    author: 'Matthew Reilly',
    favourite: true,
    stars: 5,
    imageUrl: 'assets/covers/matthew-reilly-the-great-zoo-of-china.jpg',
    categories: ['Dragons', 'Fantasy', 'Fiction'],
  },
  {
    id:'3',
    name: 'The Secret Runners of New York',
    author: 'Matthew Reilly',
    favourite: true,
    stars: 5,
    imageUrl: 'assets/covers/matthew-reilly-the-secret-runners-of-new-york.jpg',
    categories: ['Distopian', 'Short Story'],
  },
    {
    id:'4',
    name: 'The Tournament',
    author: 'Matthew Reilly',
    favourite: false,
    stars: 4,
    imageUrl: 'assets/covers/matthew-reilly-the-tournament.jpg',
    categories: ['Fantasy', 'Puzzles', 'Chess'],
  },
]
