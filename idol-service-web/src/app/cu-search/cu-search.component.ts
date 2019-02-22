import { Component, Input, OnInit } from '@angular/core';
import { IDOLService } from '../services/IDOLService';
import { IDOLRequest } from '../models/idolRequest';
import { IDOLResponse } from '../models/idolResponse';
import { IDOLDocumentResponse } from '../models/idolDocumentResponse';

/**
 * -Displaying Data teaches property binding. 
 *  Declare a template variable "idolqueryform" for the form to display the data. 
 * -User Input shows how to listen for events with an event binding and how to update a component property with the displayed value.
 *  ngModel makes binding the form to the model easy.
 */


@Component({
  selector: 'app-cu-search',
  templateUrl: './cu-search.component.html',
  styleUrls: ['./cu-search.component.css']
})
export class CuSearchComponent implements OnInit {

  @Input() idolRequest;
  documents: Array<IDOLDocumentResponse>;
  idolResponse: IDOLResponse;

  constructor(private idolService: IDOLService) { 
    this.idolRequest = new IDOLRequest('');
    this.documents = new Array<IDOLDocumentResponse>();
    this.idolResponse = new IDOLResponse(0,null);
  }

  ngOnInit() {
  }

  sendToIDOL() {
    console.log('Sending to IDOL service 2...text:' + this.idolRequest.queryText)
    this.idolService.queryAllDocs(this.idolRequest.queryText).subscribe(data => {
      //this.documents = data.autnresponse.responsedata.hits;
      data.autnresponse.responsedata.hits.map ( _doc => {
        this.documents.push(new IDOLDocumentResponse(_doc.id.$,_doc.summary.$));
      })

      this.idolResponse.documents = this.documents;
      this.idolResponse.total = data.autnresponse.responsedata.numhits.$;
    });
  }

}
