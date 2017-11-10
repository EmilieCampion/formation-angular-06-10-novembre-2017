import { Character } from './characters/characters.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input() selectAvatar: Character;
  characters: Character[];
  pullcharacter: Character[];

  constructor() {
    this.characters = [
      new Character (
        [
          `Prise en main de la tablette`,
          `Multi-support`,
          `Miss click`
        ],
        `../assets/img/Pop-Me-01.png`,
        `Moi à l'état sauvage`
      ),
      new Character (
        [
          `Maitrise du Thûum`,
          `Prise de flèche dans le genoux`,
          `Dressage de cheval pour escalade verticale`
        ],
        `../assets/img/Pop-Me-02.png`,
        `Moi pendant mon séjour à Bordeciel`
      ),
      new Character (
        [
          `Maitre en utilisation de pistolets à eau`,
          `Des réflexes et une agilité... un peu foireuse`,
          `Cocard permanent`
        ],
        `../assets/img/Pop-Me-03.png`,
        `Moi quand j'étais à l'école du professeur Xavier`
      ),
      new Character (
        [
          `Moustache fabuleuse`,
          `Passage de l'aspirateur`,
          `lipdub parfait pour"I want to break free"`
        ],
        `../assets/img/Pop-Me-04.png`,
        `Moi quand je passe l'aspirateur`
      ),
    ];
    this.pullcharacter = [];
  }
  characterChanged(character: Character): void {
    this.pullToBottom(character);
  }
  pullToBottom(character: Character): void {
    this.pullcharacter.push(character);
  }

}
