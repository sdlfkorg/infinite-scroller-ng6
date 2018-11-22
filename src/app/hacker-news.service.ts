import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://node-hnapi.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private http: HttpClient) { }

  getLatestStories(page: number = 1) {
    return this.http.get(`${BASE_URL}/news?page=${page}`);
  }

}
