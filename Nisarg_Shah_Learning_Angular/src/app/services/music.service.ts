import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Music } from '../models/music';
import { musicList } from '../data/mockMusic';
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }
  getMusic(): Observable<Music[]>{
    return of(musicList);
  }

}
