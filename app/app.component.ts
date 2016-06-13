import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'note-app',
    templateUrl: 'app/app.component.html',
    providers: [HTTP_PROVIDERS]
})
export class AppComponent { }
