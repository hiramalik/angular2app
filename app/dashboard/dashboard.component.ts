import {Component, OnDestroy, OnInit} from '@angular/core';
import {Note, NoteService} from '../notes/note.service';
import { Router, RouteSegment } from '@angular/router';

@Component({
  selector:'my-dashboard',
  templateUrl:'app/dashboard/dashboard.component.html',
  styleUrls:['app/dashboard/dashboard.component.css'],
  providers:[NoteService]
})


export class DashboardComponent implements OnInit{
    errorMessage: string;
    notes: Note[];

constructor(private _noteService: NoteService,
private _router: Router){}
    getNotesList(){
      this._noteService.getNotes().
      subscribe(
        notes => this.notes=notes,
        error =>this.errorMessage=<any>error);
    }

    ngOnInit(){
        this.getNotesList();
    }

}