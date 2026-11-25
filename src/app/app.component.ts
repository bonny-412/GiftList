import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  santaElement!: HTMLElement;
  private santaInterval?: ReturnType<typeof setInterval>;
  isChristmas:boolean = false;
  isBirthday:boolean = false;

  ngOnInit(): void {
    this.checkIfChristmas();
    this.checkIfBirthday();
  }

  ngAfterViewInit(): void {
    if(this.isChristmas) {
      this.santaElement = document.getElementById('santa')!;
      this.moveSanta();
      this.santaInterval = setInterval(() => this.moveSanta(), 3000);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.santaInterval);
  }

  moveSanta(): void {
    const { x, y } = this.getRandomPosition();
    this.santaElement.style.transform = `translate(${x}px, ${y}px)`;
  }

  getRandomPosition(): { x: number; y: number } {
    const header = this.santaElement.parentElement!;
    const santaWidth = this.santaElement.offsetWidth;
    const santaHeight = this.santaElement.offsetHeight;

    const x = Math.random() * Math.max(0, header.clientWidth - santaWidth);
    const y = Math.random() * Math.max(0, header.clientHeight - santaHeight);

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
