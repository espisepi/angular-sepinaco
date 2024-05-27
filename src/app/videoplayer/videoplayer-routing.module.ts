import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';

const routes: Routes = [
  { path: '', component: VideoplayerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoplayerRoutingModule { }
