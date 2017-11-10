import { Character } from './../characters/characters.model';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.css']
})
export class MiniatureComponent implements OnInit {
  @Input() character: Character;
  @Input() selectAvatar: Character;
  @Output() onCharacterSelected: EventEmitter<Character>;

  constructor() {
    this.onCharacterSelected = new EventEmitter();
  }
  clicked(character) {
    this.onCharacterSelected.emit(character);
  }

  ngOnInit() {
  }

}
