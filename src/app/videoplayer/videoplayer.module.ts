import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoplayerRoutingModule } from './videoplayer-routing.module';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';


@NgModule({
  declarations: [
    VideoplayerComponent
  ],
  imports: [
    CommonModule,
    VideoplayerRoutingModule
  ]
})
export class VideoplayerModule { }
