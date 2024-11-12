import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-button-sound',
  standalone: true,
  imports: [],
  templateUrl: './button-sound.component.html',
  styleUrl: './button-sound.component.css'
})
export class ButtonSoundComponent implements AfterViewInit {
  audio = new Audio();
  isAudioOn:boolean = false;

  ngAfterViewInit(): void {
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
