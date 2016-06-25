import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


export interface Note {
  id: number;
  name: string;
  category:string;
  text: string;
}

@Injectable()
export class NoteService {
  notesUrl = 'app/notes'
    constructor(private _http: Http) {
        
    }

getNotes(){
      return this._http.get(this.notesUrl).
      map((response:Response) => <Note[]>response.json().data)
      .do(data => console.log('All:' + JSON.stringify(data)))
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
      .post(this.notesUrl, body, options)
      .map(res => res.json().data)
      .do(data=>console.log(data))
      .catch(this.handleError);
      // .finally(() => this._spinnerService.hide());
  }
  
  getNote(id:number){
    return this.getNotes()
      .map((notes: Note[]) => notes.find(n => n.id===id))
      .do(n=>console.log('selected'+ JSON.stringify(n)))
      .catch(this.handleError);
  }

  deleteNote(note: Note) {
    //this._spinnerService.show();
     let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.notesUrl}/${note.id}`;
    return this._http
      .delete(url, headers )
      .catch(this.handleError);
      //.catch(this._exceptionService.catchBadResponse);
      //.finally(() => this._spinnerService.hide());
  }
 
}
