// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom }  from '@angular/core';
import { HttpClientModule }     from '@angular/common/http';
import { provideRouter }        from '@angular/router';
import { provideAnimations }    from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { routes }       from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),              // 👈 habilita animaciones de Angular Material
    importProvidersFrom(HttpClientModule),
  ],
}).catch(err => console.error(err));
