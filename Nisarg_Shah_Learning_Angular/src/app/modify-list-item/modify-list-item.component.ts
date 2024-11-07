import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Music } from '../models/music';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../services/music.service';




@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent {
  musicForm: FormGroup;
  song: Music | undefined;
  error: string | null = null;

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
  
  }


