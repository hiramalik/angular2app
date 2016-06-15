import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NoteComponent} from './notes/note.component';
import {Router, ROUTER_DIRECTIVES , ROUTER_PROVIDERS, Routes} from '@angular/router';



@Component({
    selector: 'note-app',
    templateUrl: 'app/app.component.html',
    directives:[DashboardComponent, NoteComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@Routes([
  { path:'/', component:DashboardComponent },
  { path: '/dashboard', component: DashboardComponent },
  { path: '/note', component: NoteComponent }
])
export class AppComponent { }
