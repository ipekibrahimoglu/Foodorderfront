<<<<<<< HEAD
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
=======
import { ApplicationConfig } from '@angular/core';
>>>>>>> e41cde0f8ff84c0833d990b427ad5cbbb641bb55
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
=======
  providers: [provideRouter(routes)]
>>>>>>> e41cde0f8ff84c0833d990b427ad5cbbb641bb55
};
