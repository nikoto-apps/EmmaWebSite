import { Component, inject } from '@angular/core';
import { LoveAtFirstTimeComponent } from "./love-at-first-time/love-at-first-time.component";
import { BeforeYouComponent } from "./before-you/before-you.component";
import { SweetPeaComponent } from "./sweet-pea/sweet-pea.component";
import { FamilyHeirloomComponent } from "./family-heirloom/family-heirloom.component";
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { Router } from '@angular/router';
import { WeddingComponent } from "./wedding/wedding.component";
import { CinematicExperienceComponent } from "./cinematic-experience/cinematic-experience.component";

@Component({
  selector: 'app-price',
  imports: [LoveAtFirstTimeComponent, BeforeYouComponent, SweetPeaComponent, FamilyHeirloomComponent, RevealOnScrollDirective, WeddingComponent, CinematicExperienceComponent, CinematicExperienceComponent],
  template: `
    <section class="relative w-full min-h-screen bg-[#1A1C16] pt-24">

  <header class="mx-auto max-w-6xl px-6 md:px-12 text-center  md:pb-20">
    <p class="mb-6 text-[#D5C8B0]/60 uppercase tracking-[0.4em] text-xs md:text-sm">
      Services
    </p>

    <h1 class="text-[#D5C8B0]

  font-light

  tracking-tight

  leading-[1.05]

  text-4xl

  sm:text-5xl

  md:text-6xl">
      Expériences Photographiques
    </h1>

    <p class="mt-7 mx-auto max-w-2xl text-[#D5C8B0]/75 text-base md:text-lg leading-relaxed">
      Chaque séance est imaginée comme une expérience unique, pensée pour raconter
      votre histoire avec élégance et authenticité.
    </p>

    <div class="mt-10 h-px w-24 mx-auto bg-white/10"></div>
  </header>

    <div revealOnScroll>
      <app-cinematic-experience (reserve)="onChildClick()" />
    </div>

    <div revealOnScroll>
      <app-before-you (reserve)="onChildClick()" />
    </div>

    <div revealOnScroll>
      <app-love-at-first-time (reserve)="onChildClick()" />
    </div>

    <div revealOnScroll>
      <app-sweet-pea (reserve)="onChildClick()" />
    </div>

    <div revealOnScroll>
      <app-family-heirloom (reserve)="onChildClick()" />
    </div>

    <div revealOnScroll>
      <app-wedding (reserve)="onChildClick()" />
    </div>

</section>
  `,
  styles: ``
})
export class PriceComponent {
routes = inject(Router);
  onChildClick() {
   this.routes.navigate(['/contact']);
  }

}
