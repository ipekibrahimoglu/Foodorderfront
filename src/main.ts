import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { appRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
     provideRouter(appRoutes)
  ]
}).catch((err) => console.error(err));
