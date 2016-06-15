import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface Note {
  id: number;
  name: string;
  category:string;
  text: string;
}

@Injectable()
export class NoteService {
    constructor(private _http: Http) {
        
    }
    getNotes(){
         return this._http.get('app/api/notes.json').
         map((response:Response) => <Note[]>response.json().data)
         .do(data => console.log(data))
         .catch(this.handleError);
    }

handleError(error: Response){
  console.error(error);
  return Observable.throw(error.json().error || 'Error returning note json');
}
}
