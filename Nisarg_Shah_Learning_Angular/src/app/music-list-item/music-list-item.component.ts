import { Component, Input, OnInit } from '@angular/core';
import { Music } from '../models/music';

@Component({
  selector: 'app-music-list-item',
  standalone: true,
  imports: [],
  templateUrl: './music-list-item.component.html',
  styleUrl: './music-list-item.component.scss'
})
export class MusicListItemComponent implements OnInit{
@Input() musicItem?: Music;
constructor(){

}
ngOnInit(): void {
  
}
onDelete(): void{}
navigateToMusicList(): void{}
}
