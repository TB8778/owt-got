import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterStoreService} from './character-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CharacterStoreService]
})
export class CharacterStoreModule { }
