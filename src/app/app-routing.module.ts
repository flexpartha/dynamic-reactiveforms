import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamictypejsonformComponent } from './dynamictypejsonform/dynamictypejsonform.component';
import { DynamictypejsonformwithValidationErrorComponent } from './dynamictypejsonformwith-validation-error/dynamictypejsonformwith-validation-error.component';
import { DynamicFormFromRemotejsonComponent } from './dynamic-form-from-remotejson/dynamic-form-from-remotejson.component';

const routes: Routes = [
  {
    path: "dynamicType", component:DynamictypejsonformComponent
  },
  {
    path: "dynamicTypeVdError", component:DynamictypejsonformwithValidationErrorComponent
  },
  {
    path: "dynamicTypeRemote", component:DynamicFormFromRemotejsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
