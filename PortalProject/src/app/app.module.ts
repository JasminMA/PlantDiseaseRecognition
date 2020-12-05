import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'primeng/fileupload';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {HeaderComponent} from './header/header.component';
import {DetectionModulesModule} from './detection-modules/detection-modules.module';

@NgModule({

  declarations: [// Inside of the declarations array, we define all the components, directives and pipes
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    FileUploadModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ButtonModule,
    DetectionModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Defines the root-component of the Application. Only use this in the AppModule.
})
export class AppModule {
}
