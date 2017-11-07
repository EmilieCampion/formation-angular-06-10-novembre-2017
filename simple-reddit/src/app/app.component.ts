import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title= 'app';
  articles: Article[] = [];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article : ${title.value} ${link.value}`);
    this.articles.push(new Article (title.value, link.value));
    title.value = link.value = '';
    return false;
  }

  constructor() {
    this.articles.push(new Article ('Angular JS top fw', 'http://angular.io', 10));
    this.articles.push(new Article ('EmberJS flop fw', 'http://emberjs.io', 20));
    this.articles.push(new Article ('VueJS new Comer fw', 'http://angular.io', 15));
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
