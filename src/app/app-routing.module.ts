import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddWorkerComponent } from './components/add-worker/add-worker.component';
import { EditWorkerComponent } from './components/edit-worker/edit-worker.component';
import { ListWorkerComponent } from './components/list-worker/list-worker.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'add-worker'},
  {path: 'add-worker', component:AddWorkerComponent},
  {path: '',pathMatch: 'full', redirectTo:'edit-worker'},
  {path: 'edit-worker/:id', component:EditWorkerComponent},
  {path: '',pathMatch: 'full', redirectTo:'list-worker'},
  {path: 'list-worker', component:ListWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
