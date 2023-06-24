import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamictypejsonformComponent } from './dynamictypejsonform/dynamictypejsonform.component';
import { DynamictypejsonformwithValidationErrorComponent } from './dynamictypejsonformwith-validation-error/dynamictypejsonformwith-validation-error.component';

const routes: Routes = [
  {
    path: "dynamicType", component:DynamictypejsonformComponent
  },
  {
    path: "dynamicTypeVdError", component:DynamictypejsonformwithValidationErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
