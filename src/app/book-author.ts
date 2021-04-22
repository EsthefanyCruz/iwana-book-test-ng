import {Book} from './book';
import {Author} from './author';

export interface BookAuthor {
  id: number;
  book: Book;
  author: Author;
}
