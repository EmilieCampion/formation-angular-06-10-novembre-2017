import { Character } from './characters.model';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharactersComponent implements OnInit {

  selectAvatar: Character[];
  @Input() character: Character;
  @Output() onCharacterSelected: EventEmitter<Character>;

  constructor() {
    this.onCharacterSelected = new EventEmitter();
    this.selectAvatar = [];
  }

  ngOnInit() {
  }

}
