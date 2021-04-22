import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Ranking} from '../ranking';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ranking: Ranking = {id: 1, score: 5, book: {id: 1, title: 'title-1', pages: 300, isbn: '1234567891234', price: 300.00, summary: 'sum-1', editorial: 'ed-1', datePublication: '1996-06-13', deleted: false, category: {id: 1, name: 'Drama'} }};
  }

}
