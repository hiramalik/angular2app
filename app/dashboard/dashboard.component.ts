import {Component} from '@angular/core';
import {Note, NoteService} from '../notes/note.service';

@Component({
  selector:'my-dashboard',
  templateUrl:'app/dashboard/dashboard.component.html'
})


export class DashboardComponent{
    errorMessage: string;
    notes: Note[];

constructor(private _noteService: NoteService){}
    getNotesList(){
      this._noteService.getNotes().
      subscribe(
        notes => this.notes=notes,
        error =>this.errorMessage=<any>error);
    }
}