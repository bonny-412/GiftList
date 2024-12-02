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
      note: 'Pagamenti da 5€',
      isDisabled: false
    },
    {
      title: 'Yamaha MT-09',
      url: 'https://www.yamaha-motor.eu/it/it/motorcycles/hyper-naked/pdp/mt-09-2025/?srsltid=AfmBOorUB00LYHDxPgFd86pQc5NWmWKUkICcgX3cwucWOU-IQ4ZcHSSC#2025-MT09AS-MDNM6',
      img: 'mt09.png',
      color: 'Nero',
      size: '-',
      isDisabled: false
    },
    {
      title: 'Tiger Sport 800',
      url: 'https://www.triumphmotorcycles.it/moto/adventure/tiger-sport-800/tiger-sport-800-2025',
      img: 'tiger-sport.png',
      color: 'Sapphire black',
      size: '-',
      isDisabled: false
    },
    {
      title: 'Ginocchiere Kaizen',
      url: 'https://kaizen-athletica.com/products/training-knee-sleeves',
      img: 'kaizen.png',
      color: '-',
      size: 'L',
      isDisabled: false
    },
    {
      title: 'Ginocchiere SBD',
      url: 'https://www.powerliftingshop.it/ginocchiere-palestra-sbd/',
      img: 'sbd.png',
      color: '-',
      size: 'L/XL',
      isDisabled: false
    },
    {
      title: 'Zaino Pieghevole Macna Hipbag',
      url: 'https://www.xlmoto.it/product/zaino-pieghevole-macna-hipbag_pid-PIA-349513',
      img: 'macna-zaino.png',
      color: '-',
      size: '-',
      isDisabled: false
    },
    {
      title: 'Marsupio Macna',
      url: 'https://www.xlmoto.it/product/marsupio-macna-25x8x13cm-nero_pid-PIA-163747',
      img: 'macna-marsupio.png',
      color: '-',
      size: '-',
      isDisabled: false
    },
    {
      title: 'Marsupio Race Now',
      url: 'https://www.wheelup.it/marsupio-race-now-1-5-litri-nero.html?utm_source=google&utm_medium=cpc&utm_campaign=PMax%3A%202021_IT_Shopping_Smart&utm_id=17820149233&gad_source=1&gbraid=0AAAAAC4p4IfsKY52TRi8vIanp7qiKrW_4&gclid=CjwKCAiAxqC6BhBcEiwAlXp459h_fuIS0BI8rx4rr8NdeypboM_pE62WtOnkqNOMHlHrbQE3me96ZhoCZ14QAvD_BwE',
      img: 'marsupio-race-now.png',
      color: '-',
      size: '-',
      isDisabled: false
    },
    {
      title: 'Marsupio B9',
      url: 'https://www.wheelup.it/marsupio-b9-3-5-litri-nero.html',
      img: 'marsupio-b9.png',
      color: '-',
      size: '-',
      isDisabled: false
    },
    {
      title: 'Tastiera Logitech',
      url: 'https://www.amazon.it/Logitech-Illuminata-Bluetooth-Retroilluminata-Compatibile/dp/B07W7KTTMZ/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ZJHP8E79BTTX&dib=eyJ2IjoiMSJ9.2-Hc5hfeTctyOJONDux-WXsWo6vEJgoX0wdW5nG3RLAwdtzYYgi3p5WDHZbS3fPI1IzP3fo2Rxm2426WvVrlSTTa1aVcs2tM41qAAqPcWHrKy7mI2V6n5FhEQmwiJm99DJSAMcuuaF_ECou3Q20AwzAoeateRcWwZ2P6qMB5W03-RGgvJ0CQp3gR71eczJ3qrxolKb9VLp4rWhqCVE8g3GB9GgdsJfKc2ip2H6VvtrzfVx0Y4mpnPcVuw7CI7gM-JK1DrT5g2I5Og4Mf09wm9cctWD1AMyWPCA_Kib90XCc.XPUawqXNmLaTlZQPImAnMWWDMxedeJpNz3BOI9cE9gQ&dib_tag=se&keywords=tastiera+logitec+mini+keys&nsdOptOutParam=true&qid=1733173088&sprefix=tastiera+logitec+mini+keys%2Caps%2C109&sr=8-1',
      img: 'tastiera-logitech.png',
      color: 'Nero o Bianco',
      size: 'windows',
      isDisabled: false
    },
    {
      title: 'Occhiali da vista',
      url: '',
      img: 'occhiali-vista.png',
      color: '',
      size: '',
      note: 'Simili a quelli che uso per lavoro',
      isDisabled: true
    },
  ]

}
