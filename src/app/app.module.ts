import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragComponent } from './components/drag/drag.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AngularDraggableModule } from 'angular2-draggable';
import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    AngularDraggableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
