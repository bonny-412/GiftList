import { AfterViewInit, Component } from '@angular/core';
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
export class AppComponent {

}
