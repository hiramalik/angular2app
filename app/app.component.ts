import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NoteComponent} from './notes/note.component';
import {NavComponent} from './nav/nav.component';



@Component({
    selector: 'note-app',
    templateUrl: 'app/app.component.html',
    providers: [HTTP_PROVIDERS]
})
export class AppComponent { }
