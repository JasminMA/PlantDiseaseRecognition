import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { DetectionModulesComponent } from './detection-modules/detection-modules.component';
import { ShopModulesComponent } from './shop-modules/shop-modules.component';

@NgModule({
  declarations: [
    AppComponent,
    DetectionModulesComponent,
    ShopModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
