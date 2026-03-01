import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 w-full h-16 bg-[#1A1C16]/60 backdrop-blur-md z-50">
      <nav class="w-full h-full flex items-center justify-center">
        <ul class="flex gap-8 text-sm font-medium tracking-wide">
          
          @for (nav of navigation; track $index) {
            <li>
              <a 
                [routerLink]="nav.link"
                routerLinkActive="text-white font-semibold underline underline-offset-4"
                class="text-[#D5C8B0] hover:text-white transition-colors duration-200"
              >
                {{ nav.label }}
              </a>
            </li>
          }

        </ul>
      </nav>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {

  navigation = [
    { label: 'À propos', link: '/aboutMe' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Services', link: '/services' },
    { label: 'Contact', link: '/contact' },
  ];

}