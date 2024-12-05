import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Music } from '../models/music';
import { musicList } from '../data/mockMusic';
import { ActivatedRoute, Router} from '@angular/router';
import { MusicService } from '../services/music.service';
import { DirectorNamePipe } from '../director-name.pipe';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


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
  selector: 'app-music-list-item',
   standalone: true,
  imports: [CommonModule, DirectorNamePipe, HoverHighlightDirective, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule, MatListModule,MatDividerModule, MatExpansionModule],
  templateUrl: './music-list-item.component.html',
  styleUrl: './music-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicListItemComponent implements OnInit{
  readonly panelOpenState = signal(false);
  hidden = false;
  toggleBadgeVisibility(){
    this.hidden = !this.hidden;
  }
@Input() musicItem?: Music;
constructor(private router: Router,
  private musicService : MusicService
){
  const iconRegistry  = inject(MatIconRegistry);
  const sanitizer = inject(DomSanitizer);
  iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
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
