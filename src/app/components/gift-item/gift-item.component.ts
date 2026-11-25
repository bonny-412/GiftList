import { Component, Input } from '@angular/core';
import { GiftBean } from '../../util/giftBean';

@Component({
  selector: 'app-gift-item',
  standalone: true,
  imports: [],
  templateUrl: './gift-item.component.html',
  styleUrl: './gift-item.component.css'
})
export class GiftItemComponent {
  @Input('giftBean') giftBean:GiftBean|undefined;
  @Input() eagerImage = false;
  @Input() priorityImage = false;
  imageStatus: 'loading' | 'loaded' | 'error' = 'loading';
}
