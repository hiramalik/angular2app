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
var entity_service_1 = require('../entity/entity.service');
var router_1 = require('@angular/router');
var NoteComponent = (function () {
    function NoteComponent(_noteService, _entityService, _router) {
        this._noteService = _noteService;
        this._entityService = _entityService;
        this._router = _router;
        this.editNote = {};
    }
    NoteComponent.prototype.routerOnActivate = function (curr) {
        var id = +curr.getParam('id');
        this._getNote(id);
    };
    NoteComponent.prototype.isAddMode = function (id) {
        return isNaN(id);
    };
    NoteComponent.prototype.save = function () {
        var _this = this;
        var note = this.note = this._entityService.merge(this.note, this.editNote);
        if (note.id == null) {
            this._noteService.addNote(note)
                .subscribe(function (not) {
                _this._setEditNote(not);
                _this._gotoNotes();
            });
            return;
        }
        this._noteService.updateNote(note)
            .subscribe(function () { return _this._gotoNotes(); });
    };
    NoteComponent.prototype._getNote = function (id) {
        var _this = this;
        if (id === 0)
            return;
        if (this.isAddMode(id)) {
            this.note = { name: '', text: '' };
            this.editNote = this._entityService.clone(this.note);
            return;
        }
        this._noteService.getNote(id)
            .subscribe(function (note) { return _this._setEditNote(note); });
    };
    NoteComponent.prototype._setEditNote = function (note) {
        if (note) {
            this.note = note;
            this.editNote = this._entityService.clone(this.note);
        }
        else {
            this._gotoNotes();
        }
    };
    NoteComponent.prototype._gotoNotes = function () {
        var id = this.note ? this.note.id : null;
        var route = ['/notes'];
        this._router.navigate(route);
    };
    NoteComponent.prototype.delete = function () {
        var _this = this;
        this._noteService.deleteNote(this.note)
            .subscribe(function () {
            _this._gotoNotes();
        });
    };
    NoteComponent.prototype.cancel = function () {
        this._gotoNotes();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NoteComponent.prototype, "note", void 0);
    NoteComponent = __decorate([
        core_1.Component({
            selector: 'note',
            templateUrl: 'app/notes/note.component.html',
            styleUrls: ['app/notes/note.component.css'],
            providers: [note_service_1.NoteService, entity_service_1.EntityService]
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService, entity_service_1.EntityService, router_1.Router])
    ], NoteComponent);
    return NoteComponent;
}());
exports.NoteComponent = NoteComponent;
//# sourceMappingURL=note.component.js.map