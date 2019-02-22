import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';   //npm i rxjs-compat
import { ApplicationProperties } from './ApplicationProperties';

@Injectable()
export class IDOLService {

  constructor(private http: HttpClient) {
  }

  queryAllDocs(queryText: string): Observable<any> {
    console.log(ApplicationProperties.IDOLService+"/query/"+queryText)
    return this.http.get(ApplicationProperties.IDOLService+"/query/"+queryText)
  }
}