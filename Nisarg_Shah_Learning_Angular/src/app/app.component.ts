import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Music } from './models/music';
import { NgFor, NgIf } from '@angular/common';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicListItemComponent } from './music-list-item/music-list-item.component';
import { MusicService } from './services/music.service';
import { NgOptimizedImage } from '@angular/common';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, MusicListComponent, MusicListItemComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Nisarg_Shah_Learning_Angular';
  name:string = 'Nisarg Shah';
  age:number = 20;
  titleProject ='Songs name';

  
  newMusic : Music = {musictype:"hiphop",musicName:"Dope Shope",musicDirector:"Yo Yo",musicViews:200000,istraditional:false, imageUrl:"assets/images/song1.jpg"};


  song1: Music = {musictype:"hiphop", musicName:"Millionare", musicDirector:"Yo Yo honey singh",musicViews: 100000, istraditional:false, imageUrl:"assets/images/song2.jpg"};
  song2: Music = {musictype:"hiphop", musicName:"Paris Ka trip", musicDirector:"Yo Yo honey singh",musicViews: 200000, istraditional:false, imageUrl:"assets/images/song1.jpg"}; 
  song3: Music = {musictype:"love", musicName:"Ae dil ae muskil", musicDirector:"Arjit Singh",musicViews: 300000, istraditional:false, imageUrl:"assets/images/song3.jpg"};
  song4: Music = {musictype:"sad", musicName:"Phir bhi tumko Chaahunga", musicDirector:"Arjit Singh",musicViews: 400000, istraditional:false, imageUrl:"assets/images/song4.jpg"};
  song5: Music = {musictype:"rock", musicName:"Rafta Rafta", musicDirector:"Suraj Jagan",musicViews: 10000, istraditional:false, imageUrl:"assets/images/song5.jpg"};
  song6: Music = {musictype:"classical", musicName:"Saiyaan", musicDirector:"Arshad ali khan",musicViews: 500000, istraditional:true, imageUrl:"assets/images/song6.jpg"};

  musicList:Music[]= [this.song1,this.song2,this.song3,this.song4,this.song5,this.song6];

  constructor(private musicNameService: MusicService ){}

  ngOnInit(): void {
      this.musicNameService.getMusicByName("Paris Ka trip").subscribe({
        next: (data: Music | undefined) => {
          if (data) {
            this.newMusic = data;
          }
        }
      })
  }
}
