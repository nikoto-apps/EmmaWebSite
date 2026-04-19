import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: ` <div
    class="min-h-screen flex flex-col 
  "
  >
    <header><app-header /></header>
    <main class="flex-1  bg-[#0b0c0a]">
      <router-outlet></router-outlet>
    </main>
    <footer class="flex-none">
      <app-footer></app-footer>
    </footer>
  </div>`,
  styles: ``,
})
export class AppComponent {}
