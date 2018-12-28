import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ListpostComponent } from './listpost/listpost.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpostComponent,
    ListpostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
