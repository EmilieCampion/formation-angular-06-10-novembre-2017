import { Character } from './../characters/characters.model';
import { Component, OnInit, Input } from '@angular/core';
@Component ({
    selector: 'app-characters-abilities',
    template: `<li *ngFor="let abilities of character.abilities; let i=index">{{abilities}}</li>`
})


export class CharacterAbilitiesComponent implements OnInit {
    @Input() character: Character;

    constructor() {

    }

    ngOnInit() {}
}
