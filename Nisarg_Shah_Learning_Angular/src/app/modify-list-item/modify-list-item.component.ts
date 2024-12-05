import { Component, model } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Music } from '../models/music';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../services/music.service';
import { HighlightOnFocusDirective } from '../directives/highlight-on-focus.directive';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HighlightOnFocusDirective, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatCardModule, MatCheckboxModule, MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent implements OnInit{
  musicForm: FormGroup;
  song: Music | undefined;
  error: string | null = null;
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before'| 'after'>('after');
  readonly disabled = model(false);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private musicService: MusicService,
    private router: Router
  ){
    this.musicForm = this.fb.group({
      musictype: ['', Validators.required],
      musicName: ['', Validators.required],
      musicDirector: ['', Validators.required],
      musicViews: [''],
      istraditional: [false]
  });}

  ngOnInit(): void {
      
  }

  addMusic(){
    const newMusic: Music= this.musicForm.value;
    this.musicService.addMusic(newMusic)
  }
  updateMusic(){
    const updatedMusic: Music = this.musicForm.value;
    this.musicService.updateMusic(updatedMusic)
  }
  deleteMusic(musicName: string): void{
    this.musicService.deleteMusic(musicName)
}
  
  }


