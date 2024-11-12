import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './components/countdown/countdown.component';
import { GiftsComponent } from './components/gifts/gifts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownComponent, GiftsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'GiftList';
  isAudioOn:boolean = false;
  audio = new Audio();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      const loader = document.querySelector('#preloader');
      const body = document.querySelector('body');

      // Fade out the preloader and loader
      if (preloader) {
        this.renderer.setStyle(preloader, 'display', 'none');
      }
      if (loader) {
        this.renderer.setStyle(loader, 'display', 'none');
      }
      if (body) {
        this.renderer.setStyle(body, 'overflow', 'visible');
      }
    }, 1500);

    this.playSound()
  }

  playSound() {
      this.audio.src = '../assets/audio.mp3';
      this.audio.load();
      this.audio.play();
      this.isAudioOn = true;
  }

  clickPlaySound() {
    if(this.isAudioOn) {
      this.audio.pause();
    }else {
      this.audio.play();
    }
    this.isAudioOn = !this.isAudioOn
  }


}
