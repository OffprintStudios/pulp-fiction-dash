import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { IconsModule } from './modules/icons/icons.module';
import { AuthInterceptor } from './services/auth';
import { EditorComponent } from './components/editor/editor.component';

import { HomeComponent } from './pages/home';
import { QueueComponent } from './pages/queue';
import { NewsComponent, NewspostFormComponent } from './pages/news';
import { DocsComponent } from './pages/docs';
import { ReportsComponent } from './pages/reports';
import { UsersComponent } from './pages/users';
import { AuditComponent } from './pages/audit';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, QueueComponent, NewsComponent, DocsComponent,
    ReportsComponent, UsersComponent, AuditComponent, NewspostFormComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, IconsModule, CKEditorModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
