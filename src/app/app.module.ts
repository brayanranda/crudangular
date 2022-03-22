import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AddWorkerComponent } from './components/add-worker/add-worker.component';
import { EditWorkerComponent } from './components/edit-worker/edit-worker.component';
import { ListWorkerComponent } from './components/list-worker/list-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWorkerComponent,
    EditWorkerComponent,
    ListWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
