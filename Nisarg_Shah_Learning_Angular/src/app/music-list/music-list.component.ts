import { Component , OnInit} from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../services/music.service';
import { NgFor } from '@angular/common';
import { MusicListItemComponent } from '../music-list-item/music-list-item.component';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [NgFor, MusicListItemComponent, HoverHighlightDirective],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent implements OnInit{
    musicList:Music[]=[];
    constructor (private musicService: MusicService){}
    
    ngOnInit(): void {
      this.musicService.getMusic().subscribe({
        next: (data: Music[]) => this.musicList = data,
        error:err => console.error("Error fetching Music", err),
        complete:() => console.log("Music data fetch complete!")
      })
      
    }
    selectedMusic?: Music;
    selectMusic(music: Music): void {
    this.selectedMusic = music;
  }







  }

