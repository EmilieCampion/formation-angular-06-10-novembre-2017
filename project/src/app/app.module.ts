import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiniatureComponent } from './miniature/miniature.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterAbilitiesComponent} from './characters-abilities/characters-abilities.component';
import { CharactersImgComponent } from './characters-img/characters-img.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniatureComponent,
    CharactersComponent,
    CharacterAbilitiesComponent,
    CharactersImgComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
