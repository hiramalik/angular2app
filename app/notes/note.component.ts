import {Component} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {RouteParams} from '@angular/router-deprecated';
import {Note,NoteService} from './note.service';


@Component({
  selector:'note',
  templateUrl:'app/notes/note.component.html',
  directives:[ROUTER_DIRECTIVES],
  providers:[NoteService]

})

export class NoteComponent {

  errorMessage: string;
    notes: Note[];

}