import {Component, OnInit} from '@angular/core';
import {Note,NoteService} from './note.service';
import {NoteComponent} from './note.component';
import {Router, ROUTER_DIRECTIVES , ROUTER_PROVIDERS, Routes} from '@angular/router';


@Component({
  selector:'note-list',
  templateUrl:'app/notes/notes.list.component.html',
  directives:[ROUTER_DIRECTIVES],
  providers:[NoteService]

})


export class NoteListComponent implements OnInit {

errorMessage: string;
notes: Note[];
filteredNotes =this.notes;

constructor(private _noteService: NoteService
) { }


// filterChanged(searchText: string) {
//     this.filteredCharacters = this._filterService.filter(searchText, ['id', 'name', 'side'], this.characters);
//   }
getCharacters() {
    this.notes = [];
    this._noteService.getNotes()
    .subscribe(notes => {
      this.notes = this.filteredNotes = notes;
      //this.filterComponent.clear();
    });
}

ngOnInit() {
    this.getCharacters();
}

}