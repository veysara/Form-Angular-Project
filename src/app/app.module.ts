import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateComponent } from './components/template/template.component';
import { TestFormComponent } from './components/test-form/test-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    TestFormComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
