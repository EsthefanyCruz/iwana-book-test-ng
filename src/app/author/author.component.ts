import { Component, OnInit } from '@angular/core';
import {Author} from '../author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const author: Author = {id: 1, name: 'author-1', first_name: 'fn-1', second_name: 'sn-1', birthday: '1995-05-30'};

  }

}
