import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { getDecemberCountdown } from '../../util/util';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() isChristmas = true;

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  isOccasionDay = false;
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.updateCountdown();
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private updateCountdown(): void {
    const remaining = getDecemberCountdown(new Date(), this.isChristmas ? 25 : 27);
    this.isOccasionDay = remaining === null;
    if (remaining === null) {
      return;
    }

    this.days = Math.floor(remaining / 86400);
    this.hours = Math.floor(remaining / 3600) % 24;
    this.minutes = Math.floor(remaining / 60) % 60;
    this.seconds = remaining % 60;
  }
}
