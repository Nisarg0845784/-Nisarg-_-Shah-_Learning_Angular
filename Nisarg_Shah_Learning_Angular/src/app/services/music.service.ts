import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Music } from '../models/music';
import { musicList } from '../data/mockMusic';
@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private music : Music[] = musicList;
  constructor() { }
  getMusic(): Observable<Music[]>{
    return of(musicList);
  }

  addMusic(newMusic:Music) : Observable<Music[]>{
    this.music.push(newMusic)
    return of(this.music);
  }

  updateMusic(updatedMusic:Music):Observable<Music[]>{
    const index = this.music.findIndex(music => music.musicName === updatedMusic.musicName);
    if (index !== -1) {
      this.music[index] = updatedMusic;
    }
    return of(this.music);
  }
    deleteMusic(musicName:String):Observable<Music[]>{
      this.music = this.music.filter(music => music.musicName != musicName);
      return of(this.music)
    }

    getMusicByName(musicName:String):Observable<Music | undefined>{
      const music = this.music.find(music =>music.musicName === musicName);
      return of(music);
    }
  }


