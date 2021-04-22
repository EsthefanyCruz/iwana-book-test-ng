import { Component, OnInit } from '@angular/core';
import {Author} from '../author';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const book: Book = {id: 1, title: 'title-1', pages: 300, isbn: '1234567891234', price: 300.00, summary: 'sum-1', editorial: 'ed-1', datePublication: '1996-06-13', deleted: false, category: {id: 1, name: 'Drama'} };
  }

}
