import { Component, output } from '@angular/core';

@Component({
  selector: 'app-cinematic-experience',
  imports: [],
  template: `
   <section class="relative min-h-screen bg-[url('/assets/images/cinematicExperience.webp')] bg-cover bg-center text-[#D5C8B0] ">

  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10

         mx-auto

         flex

         min-h-screen

         max-w-5xl

         flex-col

         items-center

         justify-center

         px-6 sm:px-8 md:px-10

         py-12 md:py-16">

    <div class="text-center">

      <h2
        class="font-signature text-3xl md:text-4xl font-light leading-none">
        The Cinematic Experience
      </h2>

      <h3
        class="mt-2 font-serif text-2xl md:text-3xl tracking-[0.08em]">
        PARIS
      </h3>

      <p
        class="mt-8 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#e8dfcf]/90">
        Couple
        <span class="mx-3">|</span>
        Engagement
        <span class="mx-3">|</span>
        Lovers
      </p>


      <p
        class="mt-10 text-lg md:text-xl font-light uppercase tracking-[0.18em]">
        À partir de 350€
      </p>

    </div>

    <div
      class="mt-auto max-w-3xl mx-auto pb-4 md:pb-8

         text-base md:text-lg

         leading-relaxed

         text-[#e8dfcf]/95

         ">

      <p>
        Une séance inspirée du cinéma parisien, pensée pour capturer votre histoire avec élégance, émotion et authenticité.
      </p>

      <div class="mt-8 space-y-4 md:space-y-5">

        <p>
          • Séance photo de 1h30 dans Paris.
        </p>

        <p>
          • Minimum 50 images retouchées en haute définition.
        </p>

        <p>
          • Galerie privée en ligne pour le téléchargement.
        </p>

        <p>
          • Conseils personnalisés avant la séance.
        </p>

        <p>
          • Accompagnement pour les poses naturelles.
        </p>

        <p>
          • 1 lieu principal + déplacements à pied dans le secteur.
        </p>

      </div>

    </div>
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

</section>
  `,
  styles: ``
})
export class CinematicExperienceComponent {
  reserve = output<void>();

  onReserveClick(event: Event) {
    event.stopPropagation();
    this.reserve.emit();
  }
}
