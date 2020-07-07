import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HouseViewComponent} from './house-view.component';

@NgModule({
  declarations: [HouseViewComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HouseViewComponent,
  ],
})
export class HouseViewModule {
}
