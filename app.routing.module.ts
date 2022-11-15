import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login.component';
import { HomeViewComponent } from './views/home.component';
import { CatalogViewComponent } from './views/catalog.component';
import {ReuseDialogComponent} from './dialog.component';

import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
@NgModule({
  declarations: [ 
    LoginViewComponent, HomeViewComponent, CatalogViewComponent, ReuseDialogComponent
  ],
  imports: [DialogModule,
    CalendarModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginViewComponent },
      { path: 'home', component: HomeViewComponent },
      { path: 'catalog', component: CatalogViewComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


