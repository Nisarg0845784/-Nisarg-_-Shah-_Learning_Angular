import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Music } from './models/music';
import { NgFor, NgIf } from '@angular/common';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicListItemComponent } from './music-list-item/music-list-item.component';
import { MusicService } from './services/music.service';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';


const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, MusicListComponent, MusicListItemComponent, NgOptimizedImage, RouterLink, RouterLinkActive, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Nisarg_Shah_Learning_Angular';
  name:string = 'Nisarg Shah';
  age:number = 20;
  titleProject ='Songs name';

  
  newMusic : Music = {musictype:"hiphop",musicName:"Dope Shope",musicDirector:"Yo Yo",musicViews:200000,istraditional:false, budget:7000000,imageUrl:"assets/images/song1.jpg"};


  song1: Music = {musictype:"hiphop", musicName:"Millionare", musicDirector:"Yo Yo honey singh",musicViews: 100000, istraditional:false, budget:7000000, imageUrl:"/assets/images/song2.jpg"};
  song2: Music = {musictype:"hiphop", musicName:"Paris Ka trip", musicDirector:"Yo Yo honey singh",musicViews: 200000, istraditional:false,budget:7000000, imageUrl:"assets/images/song1.jpg"}; 
  song3: Music = {musictype:"love", musicName:"Ae dil ae muskil", musicDirector:"Arjit Singh",musicViews: 300000, istraditional:false,budget:7000000, imageUrl:"assets/images/song3.jpg"};
  song4: Music = {musictype:"sad", musicName:"Phir bhi tumko Chaahunga", musicDirector:"Arjit Singh",musicViews: 400000, istraditional:false,budget:7000000, imageUrl:"assets/images/song4.jpg"};
  song5: Music = {musictype:"rock", musicName:"Rafta Rafta", musicDirector:"Suraj Jagan",musicViews: 10000, istraditional:false, budget:7000000,imageUrl:"assets/images/song5.jpg"};
  song6: Music = {musictype:"classical", musicName:"Saiyaan", musicDirector:"Arshad ali khan",musicViews: 500000, istraditional:true, budget:7000000,imageUrl:"assets/images/song6.jpg"};

  musicList:Music[]= [this.song1,this.song2,this.song3,this.song4,this.song5,this.song6];

  constructor(private musicNameService: MusicService ){
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));

  }

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
