import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MainNavComponent } from './components/navigation/main/mainNav.component';
import { BackgroundComponent } from './components/background/background.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectSelectorComponent } from './components/project-selector/project-selector.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    ContactFormComponent,
    MainNavComponent,
    BackgroundComponent,
    ProfileComponent,
    ProjectSelectorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ContactFormComponent
  ],
  entryComponents: [
    ContactFormComponent
  ],
})
export class AppModule { }
