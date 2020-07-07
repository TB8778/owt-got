import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BookViewModule} from './book-view/book-view.module';
import {CharacterViewModule} from './character-view/character-view.module';
import {GotViewComponent} from './got-view.component';
import {HeaderComponent} from './header/header.component';
import {HouseViewModule} from './house-view/house-view.module';

@NgModule({
  declarations: [GotViewComponent, HeaderComponent],
  imports: [
    BookViewModule,
    CharacterViewModule,
    CommonModule,
    HouseViewModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class GotViewModule {
}
