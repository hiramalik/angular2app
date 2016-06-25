import {Component} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import { NoteComponent } from './notes/note.component';
import { NoteListComponent } from './notes/notes.list.component';

import {Router, ROUTER_DIRECTIVES , ROUTER_PROVIDERS, Routes} from '@angular/router';



@Component({
    selector: 'note-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    directives:[DashboardComponent, ROUTER_DIRECTIVES],
    providers: [ ROUTER_PROVIDERS]
})
@Routes([
  { path:'/', component:DashboardComponent },
  { path: '/dashboard', component: DashboardComponent },
  { path: '/notes', component: NoteListComponent },
  { path: '/note/:id', component: NoteComponent }
])
export class AppComponent { }
