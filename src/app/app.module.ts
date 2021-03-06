import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkuComponentComponent } from './sku-component/sku-component.component';
import { SkuFormGroupComponent } from './sku-form-group/sku-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuComponentComponent,
    SkuFormGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
