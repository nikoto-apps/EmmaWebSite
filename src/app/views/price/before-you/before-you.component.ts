import { Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-before-you',
  standalone: true,
  template: `
    <section class="relative bg-[#151713] py-16">
      <div class="mx-auto max-w-6xl px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-stretch gap-10">
          
          
          <div class="md:w-1/2 h-[520px] md:h-[600px] overflow-hidden">
            <img
              src="assets/images/beforeYou.jpg"
              alt="Before You"
              class="h-full w-full object-cover
                     [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]"
            />
          </div>

         <div class="md:w-1/2 flex flex-col justify-center ">
  <h3 class="text-[#D5C8B0] text-4xl md:text-5xl  mb-4">
    Before You
  </h3>

  <p class="text-[#D5C8B0]/90 text-lg mb-2">
    Maternité | Documentaire | Grossesse
  </p>

  <p class="text-[#D5C8B0] text-2xl font-medium mb-8">
    300 €
  </p>

  <p class="text-[#D5C8B0]/90 text-lg leading-relaxed mb-8">
    La séance maternité inclut 1h30 de photoshoot & une galerie photos numérique.
  </p>

  <ul class="space-y-3">
    @for (element of list; track $index) {
      <li class="text-[#D5C8B0]/90 text-justify leading-relaxed">
        • {{ element.text }}
      </li>
    }
  </ul>
  <div class="pt-12 flex justify-center gap-4">
            <button class=" px-6 py-3 border border-white/10
                           bg-[#D5C8B0]/10 text-[#D5C8B0]
                           hover:bg-[#D5C8B0]/15 uppercase 
                           "
                           (click)="onReserveClick($event)">
              Prendre rendez-vous
            </button>
          </div>
</div>

        </div>
      </div>
    </section>
  `,
})
export class BeforeYouComponent {
  list = [
    { text: 'Session régulière (1h30 de shooting)' },
    { text: 'Minimum de 50 photos éditées à ma façon avec amour' },
    { text: 'Informations & conseils sur la préparation au shooting' },
    { text: 'Aide à la pose' },
    { text: 'Frais de déplacement compris dans les 30 kms, au-delà, frais facturés à 0,49€/km' },
  ];

  reserve= output<void>();
routes = inject(Router)

onReserveClick(event: Event) {
  event.stopPropagation(); 
  this.reserve.emit();  
}
}