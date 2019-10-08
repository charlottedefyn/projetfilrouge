import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Article {
  body: string;
  id: number;
  title: string;
  userId: number;
}



@Injectable({
  providedIn: 'root'
})
export class ArticlesOnlineService {

  private _url = 'https://shielded-eyrie-73126.herokuapp.com/api/articles';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this._url);
  }

  getOne(id) {
    return this.http.get(`${this._url}/${id}`);
  }

  getPosts(ressource) {
    return this.http.get(this._url, ressource);
  }

  update(ressource) {
    return this.http.put(`${this._url}/${ressource.id}`, ressource);
  }

  delete(id) {
    return this.http.delete(`${this._url}/${id}`);
  }
}
