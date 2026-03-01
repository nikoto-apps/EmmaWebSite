import { Component } from '@angular/core';
import { dataWork } from '../shared/data/data-work';
import { InViewClassDirective } from '../../../shared/directives/in-view-class.directive';

@Component({
  selector: 'app-mywork',
  imports: [InViewClassDirective],
  template: `
    <section class="py-16 md:py-20 bg-[#151713]">
  <div  class="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
    <div class="flex flex-col-reverse md:flex-row items-center gap-10">


      <div inViewClass="animate-in" class="reveal-base w-full md:w-1/2">
        <h3 class="text-[#D5C8B0] text-2xl md:text-3xl font-semibold mb-4">
          {{ data.title }}
        </h3>

        <p class="text-[#D5C8B0] text-base md:text-lg leading-relaxed text-justify">
          {{ data.description }}
        </p>
      </div>

      <div class="w-full md:w-1/2">
        <img
          src="assets/images/myWork.jpg"
          alt="Exemple de travail"
          class="w-full object-cover aspect-[4/5] md:aspect-[3/4]"
        />
      </div>

    </div>
  </div>
</section>
  `,
  styles: `
 `,
})
export class MyworkComponent {
  data = dataWork;
}
