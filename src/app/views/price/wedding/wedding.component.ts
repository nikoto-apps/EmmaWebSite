import { Component, output } from '@angular/core';

@Component({
  selector: 'app-wedding',
  imports: [],
  template: `
    <section class="bg-[#1A1C16] py-24 border-t border-white/10">
      <div class="mx-auto max-w-6xl px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="text-center md:text-left ">
            <h3
              class="text-[#D5C8B0] text-4xl md:text-5xl font-light tracking-wide mb-4"
            >
              Weddings / Elopements
            </h3>
            <p class="text-[#D5C8B0]/90 text-lg mb-2">
              Mariage | Elopement | Sur mesure
            </p>
            <p class="text-[#D5C8B0] text-2xl font-medium mb-8">
              À partir de 600€
            </p>

            <p class="text-[#D5C8B0]/85 text-justify leading-relaxed">
              ​Le sur-mesure comme signature. De la poésie d'une fugue amoureuse
              (elopement) au grand reportage de 10 heures, je module ma présence
              selon vos envies. Parce que votre union est unique, je travaille
              exclusivement sur devis pour créer une prestation qui vous
              ressemble vraiment.
            </p>
            <button
              class="mt-10 px-6 py-3 border border-white/10
                           bg-[#D5C8B0]/10 text-[#D5C8B0]
                           hover:bg-[#D5C8B0]/15 uppercase 
                           "
              (click)="onReserveClick($event)"
            >
              Prendre rendez-vous
            </button>
          </div>
          <div class="h-[520px] md:h-[720px] overflow-hidden">
            <img
              class="h-full w-full object-cover"
              src="assets/images/wedding.webp"
              alt="images of family heirloom"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class WeddingComponent {
  reserve = output<void>();
  onReserveClick(event: Event) {
    event.stopPropagation();
    this.reserve.emit();
  }
}
