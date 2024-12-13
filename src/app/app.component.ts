import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './components/countdown/countdown.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonSoundComponent } from './components/button-sound/button-sound.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountdownComponent, GiftsComponent, LoaderComponent, ButtonSoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  santaElement!: HTMLElement;
  isChristmas:boolean = false;
  isBirthday:boolean = false;

  ngOnInit(): void {
    this.checkIfChristmas();
    this.checkIfBirthday();

    if(this.isChristmas) {
      this.santaElement = document.getElementById('santa')!;
      this.moveSanta(); // Prima posizione iniziale
      setInterval(() => this.moveSanta(), 3000); // Cambia posizione ogni 3 secondi
    }

    if(this.isBirthday) {
      // this.santaElement = document.getElementById('santa')!;
      // this.moveSanta(); // Prima posizione iniziale
      // setInterval(() => this.moveSanta(), 3000); // Cambia posizione ogni 3 secondi
    }
  }

  moveSanta(): void {
    const { x, y } = this.getRandomPosition();
    this.santaElement.style.transform = `translate(${x}px, ${y}px)`;
  }

  getRandomPosition(): { x: number; y: number } {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const santaWidth = this.santaElement.offsetWidth;
    const santaHeight = this.santaElement.offsetHeight;

    const x = Math.random() * (windowWidth - santaWidth);
    const y = Math.random() * (windowHeight - santaHeight);

    return { x, y };
  }

  checkIfChristmas(): void {
    const today = new Date();
    this.isChristmas = today.getDate() === 25 && (today.getMonth() + 1) === 12; // Mese 12 = Dicembre
  }

  checkIfBirthday(): void {
    const today = new Date();
    this.isBirthday = today.getDate() === 27 && (today.getMonth() + 1) === 12; // Mese 12 = Dicembre
  }
  

}
