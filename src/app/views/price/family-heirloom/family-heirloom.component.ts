import { Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-heirloom',
  imports: [],
  template: `
    <section class=" bg-[#151713] py-24 border-t border-white/10">
      <div class="mx-auto max-w-6xl px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="h-[520px] md:h-[720px] overflow-hidden">
            <img
              class="h-full w-full object-cover"
              src="assets/images/familyHeirloom.webp"
              alt="images of family heirloom"
            />
          </div>

          <div class="text-center md:text-center">
            <h3
              class="text-[#D5C8B0] text-4xl md:text-5xl font-light tracking-wide mb-4"
            >
              Family heirloom
            </h3>
            <p class="text-[#D5C8B0] text-2xl font-medium mb-8">
              Portraits | Documentaire | In or Out
            </p>
            <p class="text-[#D5C8B0]/85 text-lg leading-relaxed mb-10">280€</p>
            <p class="text-[#D5C8B0]/85 text-lg leading-relaxed mb-10">
              La séance famille inclut 1h30 de photoshoot et une gallerie photos
              numérique.
            </p>
            <ul class="space-y-3">
              @for (el of element; track $index) {
                <li class="text-[#D5C8B0]/85 text-justify leading-relaxed">
                  • {{ el.text }}
                </li>
              }
            </ul>
            <div class="pt-12 flex justify-center gap-4">
              <button
                class=" px-6 py-3 border border-white/10
                           bg-[#D5C8B0]/10 text-[#D5C8B0]
                           hover:bg-[#D5C8B0]/15 uppercase 
                           "
                (click)="onReserveClick($event)"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class FamilyHeirloomComponent {
  element = [
    {
      text: 'Session régulière (1h30 de shooting)',
    },
    { text: 'Minimum de 50 photos éditées à ma façon avec amour' },
    {
      text: 'Informations & conseils sur la préparation aushooting',
    },
    {
      text: 'Aide à la pose',
    },
    {
      text: 'Frais de déplacement compris dans les 30km autour de Paris, au-delà : 0,50€/km',
    },
  ];

  reserve = output<void>();

  onReserveClick(event: Event) {
    event.stopPropagation();
    this.reserve.emit();
  }
}
