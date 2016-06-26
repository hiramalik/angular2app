"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var note_service_1 = require('./note.service');
var router_1 = require('@angular/router');
var NoteListComponent = (function () {
    function NoteListComponent(_noteService) {
        this._noteService = _noteService;
        this.filteredNotes = this.notes;
    }
    // filterChanged(searchText: string) {
    //     this.filteredCharacters = this._filterService.filter(searchText, ['id', 'name', 'side'], this.characters);
    //   }
    NoteListComponent.prototype.getCharacters = function () {
        var _this = this;
        this.notes = [];
        this._noteService.getNotes()
            .subscribe(function (notes) {
            _this.notes = _this.filteredNotes = notes;
            //this.filterComponent.clear();
        });
    };
    NoteListComponent.prototype.ngOnInit = function () {
        this.getCharacters();
    };
    NoteListComponent = __decorate([
        core_1.Component({
            selector: 'note-list',
            templateUrl: 'app/notes/notes.list.component.html',
            styleUrls: ['app/notes/notes.list.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [note_service_1.NoteService]
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService])
    ], NoteListComponent);
    return NoteListComponent;
}());
exports.NoteListComponent = NoteListComponent;
//# sourceMappingURL=notes.list.component.js.map