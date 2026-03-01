import { Component } from '@angular/core';
import { data } from '../shared/data/data-bio';
import { InViewClassDirective } from '../../../shared/directives/in-view-class.directive';

@Component({
  selector: 'app-bio',
  imports: [InViewClassDirective],
  template: `
   <section  class="py-20 bg-[#1A1C16]">
  <div  class="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
    <div class="flex flex-col md:flex-row items-center gap-10">

      <!-- Image -->
      <div class="w-full md:w-1/2">
        <img
          src="assets/images/emmaBio.jpg"
          alt="Portrait d'Emma Mayer"
          class="w-full object-cover aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
        />
      </div>

      <!-- Text -->
      <div inViewClass="animate-in" class="reveal-base w-full md:w-1/2">
        <h3 class=" text-[#D5C8B0] text-2xl md:text-3xl font-semibold mb-4">
          {{ bio.title }}
        </h3>

        <p   class="text-[#D5C8B0] text-base md:text-lg leading-relaxed text-justify">
          {{ bio.descripttion }}
        </p>
      </div>

    </div>
  </div>
</section>
`,
  styles: `

`
})
export class BioComponent {
bio = data;
}
