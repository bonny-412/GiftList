import { Component } from '@angular/core';
import { GiftItemComponent } from '../gift-item/gift-item.component';
import { getAllGifts } from '../../util/giftBean';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [GiftItemComponent],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css'
})
export class GiftsComponent {
  private readonly allGifts = getAllGifts();

  readonly contribution = this.allGifts.find(gift => gift.isContribution && !gift.isDisabled);
  readonly gifts = this.allGifts.filter(gift => !gift.isContribution)
    .sort((a, b) => b.dateInsert.localeCompare(a.dateInsert));
}
