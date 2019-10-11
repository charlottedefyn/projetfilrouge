import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../services/articles-online.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  article;

  isOk = false;


  constructor(
    private service : ArticlesOnlineService,
    private route : ActivatedRoute,
    private router : Router ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.service.getOne(id).subscribe ((result) => {
        this.article = result;
      }, (error) => {
        this.router.navigate(['/not-found']);
      })
    })
  }

  onSubmitNewArticle($event,f)
  {
    $event.preventDefault();
    if(f.valid)
    {
      const article = (f.value);

      console.log('ressource => ', article)
      this.service.update(article).subscribe((result) => {
        console.log(result)
        this.isOk = true;
      });
    }
  }

}
