import { AfterViewInit, Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit, AfterViewInit {
  @Output() endLoader = new EventEmitter<boolean>()

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      const loader = document.querySelector('#preloader');
      const body = document.querySelector('body');

      // Fade out the preloader and loader
      if (preloader) {
        this.renderer.setStyle(preloader, 'display', 'none');
      }
      if (loader) {
        this.renderer.setStyle(loader, 'display', 'none');
      }
      if (body) {
        this.renderer.setStyle(body, 'overflow', 'visible');
      }

      this.endLoader.emit(true);
    }, 1500);
  }

}
