import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApprovementFormComponent} from "./components/approvement-form/approvement-form.component";

const routes: Routes = [
  {path: "", component: ApprovementFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
