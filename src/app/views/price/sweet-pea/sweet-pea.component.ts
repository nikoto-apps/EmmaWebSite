import { Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sweet-pea',
  standalone: true,
  template: `
    <section class="bg-[#1A1C16] py-24 border-t border-white/10">
      <div class="mx-auto max-w-6xl px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
    
          <div class="text-center md:text-left">
            <h3 class="text-[#D5C8B0] text-4xl md:text-5xl font-light tracking-wide mb-4">
              Sweet Pea
            </h3>

            <p class="text-[#D5C8B0]/80 text-lg mb-2">
              Nouveau-né | Documentaire | À domicile
            </p>

            <p class="text-[#D5C8B0] text-2xl font-medium mb-8">
              300 €
            </p>

            <p class="text-[#D5C8B0]/85 text-lg leading-relaxed mb-10">
              La séance nouveau-né inclut 1h30 de photoshoot & une galerie photos numérique.
            </p>

            <ul class="space-y-3">
              @for (element of list; track $index) {
                <li class="text-[#D5C8B0]/85 text-justify leading-relaxed">
                  • {{ element.text }}
                </li>
              }
            </ul>
            <div class="pt-12 flex justify-center gap-4">
            <button class=" px-6 py-3 border border-white/10
                           bg-[#D5C8B0]/10 text-[#D5C8B0]
                           hover:bg-[#D5C8B0]/15 uppercase 
                           "
                            (click)="onReserveClick($event)"
                           >
              Prendre rendez-vous
            </button>
          </div>
          </div>
           <!-- Photo (dominante, pleine hauteur) -->
          <div class="h-[520px] md:h-[720px] overflow-hidden">
            <img
              src="assets/images/sweetPea.jpg"
              alt="Sweet Pea"
              class="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  `,
})
export class SweetPeaComponent {
  list = [
    { text: "Session régulière (1h30 de shooting)" },
    { text: "Minimum de 50 photos éditées à ma façon avec amour" },
    { text: "Informations & conseils sur la préparation au shooting" },
    { text: "Aide à la pose" },
    { text: "Frais de déplacement compris dans les 30 kms, au-delà, frais facturés à 0,49€/km" },
  ];

  reserve= output<void>();
routes = inject(Router)

onReserveClick(event: Event) {
  event.stopPropagation(); 
  this.reserve.emit();  
}
}