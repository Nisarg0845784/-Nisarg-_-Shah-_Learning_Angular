import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Route, Routes } from '@angular/router';
import { musicList } from './app/data/mockMusic';
import { MusicListComponent } from './app/music-list/music-list.component';
import { MusicListItemComponent } from './app/music-list-item/music-list-item.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {path: '', redirectTo : '/music', pathMatch:'full'},
  {path: 'music', component: MusicListComponent},
  {path: 'music', component: MusicListItemComponent}
];