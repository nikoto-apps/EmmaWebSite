import { Component, inject, output } from '@angular/core';
import { LoveAtFirstTimeData } from '../shared/datas/loveAtFirstTimeData';
import { Router } from '@angular/router';


@Component({
  selector: 'app-love-at-first-time',
  standalone: true,
  template: `
    <section class="relative w-full min-h-[700px]">
     
      <img
        src="assets/images/loveAtFirstTime.jpg"
        alt="Love at first time example"
        class="absolute inset-0 h-full w-full object-cover"
      />

 
      <div class="absolute inset-0 bg-black/35"></div>

      
      <div class="relative z-10 flex min-h-[700px]">
       
        <div class="w-full md:w-1/2 lg:w-[45%] p-8 md:p-12 lg:p-16
                     backdrop-blur-md">
          <h3 class="text-[#D5C8B0] text-3xl md:text-4xl font-semibold mb-4 text-center">
            {{ header?.title }}
          </h3>

          <p class="text-[#D5C8B0]/90 text-lg mb-6 text-center">
            {{ header?.subtitle }}
          </p>

          <p class="text-[#D5C8B0] text-2xl font-medium mb-6 text-center">
            {{ header?.price }}
          </p>

          <p class="text-[#D5C8B0]/90 text-lg leading-relaxed mb-8 text-center">
            {{ header?.description }}
          </p>

          <ul class="space-y-3">
            @for (item of items; track $index) {
              <li class="text-[#D5C8B0]/90 leading-relaxed text-justify">
                • {{ item.text }}
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

       
        <div class="hidden md:block md:flex-1"></div>
      </div>
    </section>
  `,
})
export class LoveAtFirstTimeComponent {
  data = LoveAtFirstTimeData;
  header = this.data[0].body;
  items = this.data.slice(1);
  reserve= output<void>();
routes = inject(Router)

onReserveClick(event: Event) {
  event.stopPropagation(); 
  this.reserve.emit();  
}
}