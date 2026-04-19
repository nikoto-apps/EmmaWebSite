import { Component, inject } from '@angular/core';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { PortfolioService } from './shared/service/portfolio.service';
import { map } from 'rxjs';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { PhotoCardRevealDirective } from '../../shared/directives/photo-card-reveal.directive';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PhotoCardRevealDirective],
  template: `
    <section  class="bg-[#1A1C16] relative min-h-screen pt-24">
  <div  class="mx-auto max-w-6xl px-6 md:px-12">

    <header class="text-center pb-12">
      <p class="text-[#D5C8B0]/70 tracking-[0.25em] uppercase text-xs md:text-sm mb-6">
        Portfolio
      </p>
      <h2 class="text-[#D5C8B0] font-light tracking-tight text-4xl md:text-6xl leading-[1.05]">
        Une sélection de moments
      </h2>
      <div class="mt-10 h-px w-24 mx-auto bg-white/10"></div>
    </header>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
      @for (img of images$(); track $index) {
        <div photoCardReveal class="aspect-[4/5] overflow-hidden">
          <img
            [src]="img.url"
            [alt]="img.filename"
            class="w-full h-full object-cover"
          />
        </div>
      }
    </div>

  </div>
</section>
  `,
})
export class PortfolioComponent {
  private ps = inject(PortfolioService);
  images$ = this.ps.images;
}
