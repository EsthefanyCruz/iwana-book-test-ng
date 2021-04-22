import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Category} from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const category: Category = {id: 1, name: 'name'};
  }

}
