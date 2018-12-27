import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartSlideComponent } from './start-slide/start-slide.component';
import { HttpClientModule } from '@angular/common/http';
import { StopSlideComponent } from './stop-slide/stop-slide.component';
import { TopComponent } from './top/top.component';
import { SwitchSlideComponent } from './switch-slide/switch-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    StartSlideComponent,
    StopSlideComponent,
    TopComponent,
    SwitchSlideComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
