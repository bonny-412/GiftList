import { Component } from '@angular/core';
import { GiftItemComponent } from '../gift-item/gift-item.component';
import { GiftBean } from '../../util/giftBean';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [GiftItemComponent],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css'
})
export class GiftsComponent {

  gifts:GiftBean[] = [
    {
      title: 'Bonifico PayPal',
      url: 'https://regali-bonny.netlify.app/assets/images-gift/paypal.png',
      img: 'paypal.png',
      color: '',
      size: '',
      note: 'Pagamenti da 5€'
    },
    {
      title: 'Yamaha MT-09',
      url: 'https://www.yamaha-motor.eu/it/it/motorcycles/hyper-naked/pdp/mt-09-2025/?srsltid=AfmBOorUB00LYHDxPgFd86pQc5NWmWKUkICcgX3cwucWOU-IQ4ZcHSSC#2025-MT09AS-MDNM6',
      img: 'mt09.png',
      color: 'Nero',
      size: '-'
    },
    {
      title: 'Tiger Sport 800',
      url: 'https://www.triumphmotorcycles.it/moto/adventure/tiger-sport-800/tiger-sport-800-2025',
      img: 'tiger-sport.png',
      color: 'Sapphire black',
      size: '-'
    },
    {
      title: 'Ginocchiere Kaizen',
      url: 'https://kaizen-athletica.com/products/training-knee-sleeves',
      img: 'kaizen.png',
      color: '-',
      size: 'L'
    },
    {
      title: 'Ginocchiere SBD',
      url: 'https://www.powerliftingshop.it/ginocchiere-palestra-sbd/',
      img: 'sbd.png',
      color: '-',
      size: 'L/XL'
    },
  ]

}
