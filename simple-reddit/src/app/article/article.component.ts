import { Article } from './article.model';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  votesUp(): boolean {
    this.article.votesUp();
    return false;
  }
  votesDown(): boolean {
    this.article.votesDown();
    return false;
  }

    constructor() {
    }

  ngOnInit() {
  }

}
