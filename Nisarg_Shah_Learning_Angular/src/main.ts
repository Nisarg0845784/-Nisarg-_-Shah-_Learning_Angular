import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { musicList } from './app/data/mockMusic';
import { MusicListComponent } from './app/music-list/music-list.component';
import { MusicListItemComponent } from './app/music-list-item/music-list-item.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { provideRouter } from '@angular/router';




const routes: Routes = [
  {path: '', redirectTo : '/music', pathMatch:'full'},
  {path: 'music',
    loadComponent: ()=>
      import('./app/music-list/music-list.component').then(m=>m.MusicListComponent)},
  {path: 'music/:name', 
    loadComponent : ()=> 
      import('./app/music-list-item/music-list-item.component').then(m=>m.MusicListItemComponent)},
  {path: 'modify-list-item', 
    loadComponent : ()=>
      import('./app/modify-list-item/modify-list-item.component').then(m=>m.ModifyListItemComponent)},
  {path: '**', 
    loadComponent: ()=>
      import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)}
];
bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
});
