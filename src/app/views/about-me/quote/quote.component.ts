import { Component } from '@angular/core';
import { dataQuote } from '../shared/data/data-quote';
import { InViewClassDirective } from "../../../shared/directives/in-view-class.directive";

@Component({
  selector: 'app-quote',
  imports: [InViewClassDirective],
  template: `
    <section class="relative w-full h-screen">
      <img
        src="assets/images/quote.jpg"
        alt="Background citation"
        class="w-full h-full object-cover object-center"
      />
     <div class="absolute top-[20px] right-[60px] p-6 max-w-md ">
    <blockquote inViewClass="animate-in"  class="reveal-base text-left">
      <p class="text-[#D5C8B0] text-2xl md:text-4xl italic font-light mb-4">
        {{data.quote}}
      </p>
      <footer class="text-[#D5C8B0] text-lg md:text-xl font-medium">
        — {{data.consumer}}
      </footer>
    </blockquote>
  </div>
      </section>
  `,
  styles: ``
})
export class QuoteComponent {
data = dataQuote;
}
