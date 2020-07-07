import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CharacterViewComponent} from './character-view.component';

@NgModule({
  declarations: [CharacterViewComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CharacterViewComponent,
  ],
})
export class CharacterViewModule {
}
