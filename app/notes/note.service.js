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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var NoteService = (function () {
    function NoteService(_http) {
        this._http = _http;
        this.notesUrl = 'app/notes';
    }
    NoteService.prototype.getNotes = function () {
        return this._http.get(this.notesUrl).
            map(function (response) { return response.json().data; })
            .do(function (data) { return console.log('All:' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    NoteService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Error returning note json');
    };
    NoteService.prototype.addNote = function (note) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(note);
        // this._spinnerService.show();
        return this._http
            .post(this.notesUrl, body, options)
            .map(function (res) { return res.json().data; })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
        // .finally(() => this._spinnerService.hide());
    };
    NoteService.prototype.getNote = function (id) {
        return this.getNotes()
            .map(function (notes) { return notes.find(function (n) { return n.id === id; }); })
            .do(function (n) { return console.log('selected' + JSON.stringify(n)); })
            .catch(this.handleError);
    };
    NoteService.prototype.deleteNote = function (note) {
        //this._spinnerService.show();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.notesUrl + "/" + note.id;
        return this._http
            .delete(url, headers)
            .catch(this.handleError);
    };
    NoteService.prototype.updateNote = function (note) {
        var body = JSON.stringify(note);
        //this._spinnerService.show();
        return this._http
            .put(this.notesUrl + "/" + note.id, body)
            .catch(this.handleError);
    };
    NoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map