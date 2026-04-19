import { Component, output } from '@angular/core';

@Component({
  selector: 'app-wedding',
  imports: [],
  template: `
    <section class="bg-[#1A1C16] py-24 border-t border-white/10">
      <div class="mx-auto max-w-6xl px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="text-center md:text-center">
            <h3
              class="text-[#D5C8B0] text-4xl md:text-5xl font-light tracking-wide mb-10"
            >
              Weddings / Elopements
            </h3>
            <p class="text-[#D5C8B0] text-2xl font-medium mb-8">
              Mariage | Elopement | Sur mesure
            </p>
            <p class="text-[#D5C8B0]/85 text-lg leading-relaxed mb-10">
              Sur devis uniquement
            </p>

            <p class="text-[#D5C8B0]/85 text-justify leading-relaxed">
              Chaque mariage est une histoire unique, faite de moments sincères,
              d’émotions profondes et de souvenirs précieux. J’aborde chaque
              reportage avec discrétion et sensibilité afin de capturer
              l’authenticité de votre journée, dans un style naturel et
              intemporel. Que vous organisiez un mariage intimiste ou une
              célébration plus importante, mon objectif est de préserver
              l’essence de votre histoire à travers des images élégantes et
              lumineuses. Chaque projet est préparé avec attention afin d’offrir
              une expérience photographique en parfaite harmonie avec vos
              attentes.
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
