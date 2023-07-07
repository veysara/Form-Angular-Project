import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateComponent } from './components/template/template.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DialogContentExampleDialogComponent } from './shares/dialog-content-example-dialog/dialog-content-example-dialog.component';
import { DialogFormComponent } from './shares/dialog-form/dialog-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    TestFormComponent,
    DialogContentExampleDialogComponent,
    DialogFormComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    
  ],

  bootstrap: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    TestFormComponent,
    DialogContentExampleDialogComponent,
    DialogFormComponent
  ]
})

export class AppModule { }
