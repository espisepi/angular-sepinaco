import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoplayerRoutingModule } from './videoplayer-routing.module';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';
import { VjsplayerComponent } from './components/vjsplayer/vjsplayer.component';


@NgModule({
  declarations: [
    VideoplayerComponent,
    VjsplayerComponent
  ],
  imports: [
    CommonModule,
    VideoplayerRoutingModule
  ]
})
export class VideoplayerModule { }
