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
    {
      title: 'Zaino Pieghevole Macna Hipbag',
      url: 'https://www.xlmoto.it/product/zaino-pieghevole-macna-hipbag_pid-PIA-349513',
      img: 'macna-zaino.png',
      color: '-',
      size: '-'
    },
    {
      title: 'Marsupio Macna',
      url: 'https://www.xlmoto.it/product/marsupio-macna-25x8x13cm-nero_pid-PIA-163747',
      img: 'macna-marsupio.png',
      color: '-',
      size: '-'
    },
    {
      title: 'Marsupio Race Now',
      url: 'https://www.wheelup.it/marsupio-race-now-1-5-litri-nero.html?utm_source=google&utm_medium=cpc&utm_campaign=PMax%3A%202021_IT_Shopping_Smart&utm_id=17820149233&gad_source=1&gbraid=0AAAAAC4p4IfsKY52TRi8vIanp7qiKrW_4&gclid=CjwKCAiAxqC6BhBcEiwAlXp459h_fuIS0BI8rx4rr8NdeypboM_pE62WtOnkqNOMHlHrbQE3me96ZhoCZ14QAvD_BwE',
      img: 'marsupio-race-now.png',
      color: '-',
      size: '-'
    },
    {
      title: 'Marsupio B9',
      url: 'https://www.wheelup.it/marsupio-b9-3-5-litri-nero.html',
      img: 'marsupio-b9.png',
      color: '-',
      size: '-'
    },
  ]

}
