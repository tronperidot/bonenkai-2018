import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartSlideComponent } from './start-slide/start-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    StartSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
