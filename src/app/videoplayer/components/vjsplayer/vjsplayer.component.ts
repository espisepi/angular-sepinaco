/// <reference types="video.js" />

import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import videojs from 'video.js';


@Component({
  selector: 'app-vjsplayer',
  templateUrl: './vjsplayer.component.html',
  styleUrl: './vjsplayer.component.scss'
})
export class VjsplayerComponent implements OnInit, OnDestroy{
  @ViewChild('target', {static: true}) target?: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options?: {
      fluid?: boolean,
      aspectRatio?: string,
      autoplay?: boolean,
      sources?: {
          src: string,
          type: string,
      }[],
      controls?: boolean,
  };

  // player: videojs.Player;
  player: any;


  constructor(
    private elementRef: ElementRef,
  ) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target?.nativeElement, this.options, function onPlayerReady() {
      // console.log('onPlayerReady', this);
      console.log('onPlayerReady');
    });

    // init video
    console.log({player:this.player})
    this.player.src({ type: 'video/mp4', src: "https://www.sepinaco.com/videos/stayHigh.mp4" });
    this.player.play();
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
