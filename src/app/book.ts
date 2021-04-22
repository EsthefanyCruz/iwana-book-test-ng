import {Category} from './category';

export interface Book {
  id: number;
  title: string;
  pages: number;
  isbn: string;
  price: number;
  summary: string;
  editorial: string;
  datePublication: string;
  deleted: boolean;
  category: Category;
}
