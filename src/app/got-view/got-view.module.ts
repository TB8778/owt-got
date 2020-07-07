import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {GotViewComponent} from './got-view.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [GotViewComponent, HeaderComponent],
  imports: [
    CommonModule, MatTabsModule, MatToolbarModule, MatButtonModule,
  ],
})
export class GotViewModule {
}
