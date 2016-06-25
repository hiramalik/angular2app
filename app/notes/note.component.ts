import {Component, Input} from '@angular/core';
import {Note,NoteService} from './note.service';
import {EntityService} from '../entity/entity.service';
import { Router, OnActivate, RouteSegment } from '@angular/router';



@Component({
  selector:'note',
  templateUrl:'app/notes/note.component.html',
  styleUrls:['app/notes/note.component.css'],
  providers:[NoteService, EntityService]

})

export class NoteComponent implements OnActivate {

@Input() note: Note;
errorMessage: string;
notes: Note[];
editNote: Note = <Note>{};

constructor(
private _noteService: NoteService,
private _entityService: EntityService,
private _router: Router) { }

routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
         this._getNote(id);
        
    }

isAddMode(id:number) {
      return isNaN(id);
}

save() {
      let note = this.note = this._entityService.merge(this.note, this.editNote);
      if (note.id == null) {
        this._noteService.addNote(note)
          .subscribe(not => {
            //this._toastService.activate(`Successfully added ${char.name}`);
            this._setEditNote(not);
            this._gotoNotes();
          });
        return;
      }
      // this._noteService.updateNote(note)
      //   .subscribe(() => this._toastService.activate(`Successfully saved ${note.name}`));
}

  private _getNote(id:number) {
    if (id === 0) return;
    if (this.isAddMode(id)) {
      this.note = <Note>{ name: '', text: '' };
      this.editNote = this._entityService.clone(this.note);
      return;
    }
    this._noteService.getNote(id)
      .subscribe((note: Note) => this._setEditNote(note));
  }

  private _setEditNote(note: Note) {
    if (note) {
      this.note = note;
      this.editNote = this._entityService.clone(this.note);
    } else {
      this._gotoNotes();
    }
  }

  private _gotoNotes() {
    let id = this.note ? this.note.id : null;
    let route = ['/notes'];
    this._router.navigate(route);
  }

   delete() {
    // let msg = `Do you want to delete ${this.note.name}?`;
    // this._modalService.activate(msg).then(responseOK => {
    //   if (responseOK) {
        this._noteService.deleteNote(this.note)
          .subscribe(() => {
            //this._toastService.activate(`Deleted ${this.note.name}`);
            this._gotoNotes();
          });
    //   }
    // });
  }
}