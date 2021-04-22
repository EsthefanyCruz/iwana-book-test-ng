import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './accounts/add/add.component';
import {ViewComponent} from './accounts/view/view.component';
import {DeleteComponent} from './accounts/delete/delete.component';

const routes: Routes = [
  {
  path: '',
  children: [
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'delete', component: DeleteComponent},
  {path: '**', redirectTo: 'view'}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
