import { Component, OnInit } from '@angular/core';
import { INews } from '../news/news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  errorMessage: string;
  news: INews[] = [  ];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: news => {
        this.news = news;
      },
      error: err => this.errorMessage = err
    });
  }

}
