import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Article {


    title           : String ,
    category        : String[],
    contains        : String,
    author          : String,
    date            : Date,
    email           : String,
    online          : Boolean,

}



@Injectable({
  providedIn: 'root'
})
export class ArticlesOnlineService {

  // serveur heroku qui sauvegare les données, on les récupère par ici 

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
