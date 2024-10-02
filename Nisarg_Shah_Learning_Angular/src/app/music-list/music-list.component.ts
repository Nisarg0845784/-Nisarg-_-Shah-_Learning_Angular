import { Component , OnInit} from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [],
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
  selectMusic(student: Music): void {
    this.selectedMusic = student;
  }





  // song1: Music = {musictype:"hiphop", musicName:"Millionare", musicDirector:"Yo Yo honey singh",musicViews: 100000, istraditional:false};
  // song2: Music = {musictype:"hiphop", musicName:"Paris Ka trip", musicDirector:"Yo Yo honey singh",musicViews: 200000, istraditional:false}; 
  // song3: Music = {musictype:"love", musicName:"Ae dil ae muskil", musicDirector:"Arjit Singh",musicViews: 300000, istraditional:false};
  // song4: Music = {musictype:"sad", musicName:"Phir bhi tumko Chaahunga", musicDirector:"Arjit Singh",musicViews: 400000, istraditional:false};
  // song5: Music = {musictype:"rock", musicName:"Rafta Rafta", musicDirector:"Suraj Jagan",musicViews: 10000, istraditional:false};
  // song6: Music = {musictype:"classical", musicName:"Saiyaan", musicDirector:"Arshad ali khan",musicViews: 500000, istraditional:true};

  // musicList:Music[]= [this.song1,this.song2,this.song3,this.song4,this.song5,this.song6]

  }

