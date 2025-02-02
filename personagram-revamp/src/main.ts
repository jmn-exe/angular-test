import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(HeaderComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
