import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GotViewComponent } from './got-view.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [GotViewComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class GotViewModule { }
