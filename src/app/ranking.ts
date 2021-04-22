import {Book} from './book';

export interface Ranking {
  id: number;
  score: number;
  book: Book;
}
