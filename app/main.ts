import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService,
         SEED_DATA }  from 'angular2-in-memory-web-api';
import { NoteData }   from './note-data';


bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: NoteData }                // in-mem server data
]);
