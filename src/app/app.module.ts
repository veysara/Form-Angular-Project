import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOrderCoffeeComponent } from './components/form-order-coffee/form-order-coffee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DialogContentExampleDialogComponent } from './shares/dialog-content-example-dialog/dialog-content-example-dialog.component';
import { DialogFormComponent } from './shares/dialog-form/dialog-form.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { MenuCoffeeComponent } from './components/menu-coffee/menu-coffee.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FormOrderCoffeeComponent,
    DialogContentExampleDialogComponent,
    DialogFormComponent,
    ContactComponent,
    MenuCoffeeComponent
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
    HttpClientModule,
    ClipboardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatRadioModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
