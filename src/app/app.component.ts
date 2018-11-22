import { Component } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infinite-scroller-poc';
  scrollCallback;
  currentPage = 1;
  news: Array<any> = [];

  constructor(private hackerNewsService: HackerNewsService) {
    this.scrollCallback = this.getStories.bind(this);
  }

  getStories() {
    return this.hackerNewsService.getLatestStories(this.currentPage).pipe(
      tap(this.processData)
    );

  }

  private processData = (news) => {
    this.currentPage++;
    console.log(news);
    this.news = this.news.concat(news);
  }

}
