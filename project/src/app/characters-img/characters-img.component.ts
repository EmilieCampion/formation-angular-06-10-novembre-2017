import { Character } from './../characters/characters.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters-img',
  template: '<img src="{{characters.img}}" alt="{{characters.description}}">',
  styleUrls: ['./characters-img.component.css']
})
export class CharactersImgComponent implements OnInit {
  @Input() characters: Character;

  constructor() { }

  ngOnInit() {
  }

}
