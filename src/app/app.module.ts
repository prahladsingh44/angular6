import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import {ReversePipe} from './reverse.pipe';
import { RedblackDirective } from './redblack.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ReversePipe,
    RedblackDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'hello',
        component: HelloComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
