import { Component, Input, OnInit } from '@angular/core';
import { getBirthdayDate, getChristmasDate } from '../../util/util';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit {
  @Input('isChristmas') isChristmas:boolean = true

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  urlIconCountdown:string = '../../../assets/images/christmas-tree.svg';

  constructor() {}

  ngOnInit(): void {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);  // aggiorna ogni secondo
  }

  updateCountdown(): void {
    this.urlIconCountdown = this.isChristmas ? '../../../assets/images/christmas-tree.svg' : '../../../assets/images/birthday-cake.svg';
    const dateString = this.isChristmas ? getChristmasDate() : getBirthdayDate();
    const dateCountdown = new Date(dateString).getTime();
    const currentDate = new Date().getTime();
    const timeDifference = dateCountdown - currentDate;

    if (timeDifference <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }
}
