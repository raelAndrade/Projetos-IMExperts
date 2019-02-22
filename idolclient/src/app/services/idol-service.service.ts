import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDOL_SERVER_API } from './idolserver.properties';

@Injectable({
  providedIn: 'root'
})
export class IdolServiceService {

  constructor(private http: HttpClient) { }

  getDocsQuery(queryText: string) {
    return this.http.get<Response>(`${IDOL_SERVER_API}/idol/query/${queryText}`);
  }
}
