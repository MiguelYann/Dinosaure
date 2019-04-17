import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinosauresComponent } from './dinosaures/dinosaures.component';
import { DinosauresDetailsComponent } from './dinosaures-details/dinosaures-details.component';
import { DinosauresCreateComponent } from './dinosaures-create/dinosaures-create.component';
import { DinosauresEditComponent } from './dinosaures-edit/dinosaures-edit.component';

const appRoutes: Routes = [
  {
    path: 'dinosaures',
    component: DinosauresComponent,
    data: { title: 'Dinosaures List' }
  },
  {
    path: 'dinosaures-details/:id',
    component: DinosauresDetailsComponent,
    data: { title: 'Dinosaures Details' }
  },
  {
    path: 'dinosaures-create',
    component: DinosauresCreateComponent,
    data: { title: 'Create Dinosaure' }
  },
  {
    path: 'dinosaures-edit/:id',
    component: DinosauresEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/dinosaures',
    pathMatch: 'full'
  }]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
