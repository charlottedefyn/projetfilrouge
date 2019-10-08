import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { ArticlesOnlineService } from '../services/articles-online.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles;

  constructor(
               private service: ArticlesOnlineService,

               private router: Router) { }

  ngOnInit() {

    this.service.getAll().subscribe(
      (resultat) => {
        this.articles = resultat;

      }
    );

  }

  onClickHome() {
    this.router.navigate(['/']);
  }


}
