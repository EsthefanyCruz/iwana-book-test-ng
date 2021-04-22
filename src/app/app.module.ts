import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { BookAuthorComponent } from './book-author/book-author.component';
import { CategoryComponent } from './category/category.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    BookComponent,
    BookAuthorComponent,
    CategoryComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
