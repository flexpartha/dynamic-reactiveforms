import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamictypejsonformComponent } from './dynamictypejsonform/dynamictypejsonform.component';
import { DynamictypejsonformwithValidationErrorComponent } from './dynamictypejsonformwith-validation-error/dynamictypejsonformwith-validation-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamictypejsonformComponent,
    DynamictypejsonformwithValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
