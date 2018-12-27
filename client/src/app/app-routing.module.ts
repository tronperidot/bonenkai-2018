import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';
import { SlideComponent } from './slide/slide.component';
import { StartSlideComponent } from './start-slide/start-slide.component';
import { StopSlideComponent } from './stop-slide/stop-slide.component';
import { SwitchSlideComponent } from './switch-slide/switch-slide.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'slide', component: SlideComponent },
  { path: 'start', component: StartSlideComponent },
  { path: 'stop', component: StopSlideComponent },
  { path: 'switch', component: SwitchSlideComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
