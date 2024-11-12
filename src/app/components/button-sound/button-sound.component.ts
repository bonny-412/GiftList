import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-sound',
  standalone: true,
  imports: [],
  templateUrl: './button-sound.component.html',
  styleUrl: './button-sound.component.css'
})
export class ButtonSoundComponent implements OnInit {
  audio = new Audio();
  isAudioOn:boolean = false;
  showPopup: boolean = true;
  
  ngOnInit(): void {
    // Non avviamo automaticamente l'audio
    this.audio = new Audio();
    this.audio.src = '../assets/audio.mp3';
    this.audio.load();

    // Nasconde il popup dopo 10 secondi
    setTimeout(() => {
      this.showPopup = false;
    }, 10000);
  }

  toggleSound() {
    if (this.isAudioOn) {
      this.audio.pause();
    } else {
      // Imposta l'audio a partire dal secondo secondo
      this.audio.currentTime = 2;
      this.audio.play().catch(error => {
        console.error('Riproduzione bloccata:', error);
      });
    }
    this.isAudioOn = !this.isAudioOn;
  }
}
