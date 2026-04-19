import { Component, inject } from '@angular/core';
import { LoveAtFirstTimeComponent } from "./love-at-first-time/love-at-first-time.component";
import { BeforeYouComponent } from "./before-you/before-you.component";
import { SweetPeaComponent } from "./sweet-pea/sweet-pea.component";
import { FamilyHeirloomComponent } from "./family-heirloom/family-heirloom.component";
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { Router } from '@angular/router';
import { WeddingComponent } from "./wedding/wedding.component";

@Component({
  selector: 'app-price',
  imports: [LoveAtFirstTimeComponent, BeforeYouComponent, SweetPeaComponent, FamilyHeirloomComponent, RevealOnScrollDirective, WeddingComponent],
  template: `
    <section  class="relative w-full min-h-screen pt-24 bg-[#1A1C16]">
      
     
      <header class="mx-auto max-w-6xl px-6 md:px-12 text-center pb-14">
        <p class="text-[#D5C8B0]/70 tracking-[0.25em] uppercase text-xs md:text-sm mb-6">
          Services
        </p>

        <h1 class="text-[#D5C8B0] font-light tracking-tight
                   text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
          Prestations et Tarifs
        </h1>

        <p class="mt-6 text-[#D5C8B0]/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Des séances pensées comme des souvenirs : naturelles, lumineuses, et livrées via une galerie privée.
        </p>

        <div class="mt-10 h-px w-24 mx-auto bg-white/10"></div>
      </header>


        <div revealOnScroll>
          <app-love-at-first-time (reserve)="onChildClick()" />
        </div>
        <div revealOnScroll>
          <app-before-you  (reserve)="onChildClick()"/>
        </div>
        <div revealOnScroll>
          <app-sweet-pea (reserve)="onChildClick()"/>
        </div>
        <div revealOnScroll>
          <app-family-heirloom (reserve)="onChildClick()"/>
        </div>
        <div revealOnScroll>
          <app-wedding (reserve)="onChildClick()"/>
        </div>
      

    </section>
  `,
  styles: ``
})
export class PriceComponent {
routes = inject(Router);
  onChildClick() {
    console.log('Le bouton "Prendre rendez-vous" a été cliqué dans le composant LoveAtFirstTimeComponent');
   this.routes.navigate(['/contact']);
  }

}
