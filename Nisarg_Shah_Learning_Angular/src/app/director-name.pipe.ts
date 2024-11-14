import { Pipe, PipeTransform } from '@angular/core';
import { Music } from './models/music';

@Pipe({
  name: 'directorName',
  standalone: true
})
export class DirectorNamePipe implements PipeTransform {

  transform(musicDirector: string): string {
    return musicDirector.toUpperCase();
  } 

}
