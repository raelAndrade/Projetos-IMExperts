import { Responsehits } from './Responsehits';

export class ResponseData {

    private numhits: string;
    private hits: Responsehits[] = [];

    constructor(numhits: string, hits: Responsehits) { }

}
