import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

let notesUrl = 'api/notes.json';
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
      return this._http.get(notesUrl).
      map((response:Response) => <Note[]>response.json().data)
      .do(data => console.log(data))
      .catch(this.handleError);
}

handleError(error: Response){
  console.error(error);
  return Observable.throw(error.json().error || 'Error returning note json');
}

addNote(note: Note) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(note);
   // this._spinnerService.show();
    return this._http
      .post(notesUrl, body, options)
      .map(res => res.json().data);
      // .catch(this._exceptionService.catchBadResponse)
      // .finally(() => this._spinnerService.hide());
  }

  deleteNote(note: Note) {
    //this._spinnerService.show();
    return this._http
      .delete(`${notesUrl}/${note.id}`);
      //.catch(this._exceptionService.catchBadResponse);
      //.finally(() => this._spinnerService.hide());
  }
 

 // onDbReset = this._messageService.state;

  updateNote(note: Note) {
    let body = JSON.stringify(note);
   // this._spinnerService.show();

    return this._http
      .put(`${notesUrl}/${note.id}`, body);
     // .catch(this._exceptionService.catchBadResponse);
      //.finally(() => this._spinnerService.hide());
  }
}
