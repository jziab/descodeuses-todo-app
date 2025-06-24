import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';


//localisation
registerLocaleData(localFr, 'fr');

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
