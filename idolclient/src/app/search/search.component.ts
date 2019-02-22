import { Component, OnInit } from '@angular/core';

import { IdolServiceService } from '../services/idol-service.service';
import { IdolRequest } from '../models/IdolRequest';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  queryText: IdolRequest[] = [];
  //_text: string;

  constructor(private idolService: IdolServiceService) { }

  ngOnInit() { }

  /*sendText(_text: ) {
    this.idolService.getDocsQuery(this._text)
      .subscribe(data => {
        this.queryText = data;
      });
  }*/

}
