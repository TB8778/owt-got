import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GotViewComponent} from './got-view/got-view.component';
import {GotViewModule} from './got-view/got-view.module';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';

export enum allRoutes {
  login = 'login',
  gotView = 'got-view'
}

const routes: Routes = [
  {
    path: 'got-view',
    component: GotViewComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [GotViewModule, LoginModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
