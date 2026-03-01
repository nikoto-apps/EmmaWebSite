import { Component } from '@angular/core';
import { BioComponent } from "./bio/bio.component";
import { MyworkComponent } from "./mywork/mywork.component";
import { QuoteComponent } from "./quote/quote.component";
import { aboutmeData } from './shared/data/aboutMe';
import { RevealOnScrollDirective } from "../../shared/directives/reveal-on-scroll.directive";

@Component({
  selector: 'app-about-me',
  imports: [BioComponent, MyworkComponent, QuoteComponent, RevealOnScrollDirective],
  template: `
  <section >
  <div revealOnScroll class="relative h-screen w-full">


    <img 
      src="assets/images/couple_front_face.jpg"
      alt="cover image"
      class="absolute inset-0 w-full h-full object-cover object-[center_20%]"
    />

    <div class="absolute inset-0 "></div>

   
    <div class="absolute inset-0 flex items-center px-10">
      <div class="absolute top-20  max-w-xl">
        
       
        <h1 class="text-[#D5C8B0] text-6xl md:text-8xl font-light leading-none uppercase">
          {{aboutme.firstname}}
        </h1>

       
        <h2 class="text-[#D5C8B0] text-4xl md:text-6xl mt-1 tracking-wide uppercase">
          {{aboutme.name}}
        </h2>

        
        <p class="text-[#D5C8B0] text-lg md:text-xl mt-4">
          {{aboutme.description}}
        </p>

      </div>
    </div>

  </div>
</section>
<div revealOnScroll>
  <app-bio />
</div>

<div revealOnScroll><app-mywork/></div>
<div revealOnScroll><app-quote/></div>
  `,
  styles: ``
})
export class AboutMeComponent {
aboutme = aboutmeData;
}
