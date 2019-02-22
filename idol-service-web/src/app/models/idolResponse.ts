import { IDOLDocumentResponse } from './idolDocumentResponse';

export class IDOLResponse {
    total: number;
    documents: IDOLDocumentResponse[];
    constructor(total:number, documents:IDOLDocumentResponse[]) {
        this.total = total;
        this.documents = documents;
    }
}
