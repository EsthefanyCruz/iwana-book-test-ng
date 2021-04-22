import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookAuthor} from '../book-author';

@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.css']
})
export class BookAuthorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const bookAuthor: BookAuthor = { id: 1, book: {id: 1, title: 'title-1', pages: 300, isbn: '1234567891234', price: 300.00, summary: 'sum-1', editorial: 'ed-1', datePublication: '1996-06-13', deleted: false, category: {id: 1, name: 'Drama'}}, author: {id: 1, name: 'author-1', first_name: 'fn-1', second_name: 'sn-1', birthday: '1995-05-30'}};
  }

}
