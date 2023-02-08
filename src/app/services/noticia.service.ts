import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsdata.io/api/1/news?apikey=pub_166959a2c822088da0b4ff2a73c913c516f57&category='+parametros.categoria+'&country=pe,bo&language=es'

    //const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=1f3cfbc3fcc94934b54bb91fd1aa2740'
    return this.http.get(URL);
  }
}
