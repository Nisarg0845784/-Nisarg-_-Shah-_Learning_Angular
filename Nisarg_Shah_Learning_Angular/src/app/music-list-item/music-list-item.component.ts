import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Music } from '../models/music';
import { musicList } from '../data/mockMusic';
import { ActivatedRoute, Router} from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list-item.component.html',
  styleUrl: './music-list-item.component.scss'
})
export class MusicListItemComponent implements OnInit{
@Input() musicItem?: Music;
constructor(private router: Router,
  private musicService : MusicService
){

}
ngOnInit(): void {
  
  
}
deleteMusic(musicName: string): void{
  
    this.musicService.deleteMusic(musicName).subscribe(()=> {this.router.navigate(['/music'])});
    
}
navigateToMusicList(): void{
  this.router.navigate(['/modify-list-item']);
}
}
