import {Component} from '@angular/core';
import {Note,NoteService} from './note.service';


@Component({
  selector:'note',
  templateUrl:'app/notes/note.component.html',
  providers:[NoteService]

})

export class NoteComponent {

  errorMessage: string;
    notes: Note[];

}