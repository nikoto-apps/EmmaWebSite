import { Component, inject } from '@angular/core';
import { CommunDataSharedService } from '../../shared/commun-data-shared.service';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="w-full h-40 bg-[#1A1C16] flex flex-col items-center justify-center gap-2 text-[#D5C8B0] text-sm">

  <p class="font-semibold text-[#D5C8B0] tracking-wide">
    Emma Photographie
  </p>

  <p class="flex gap-4">
    <a href="mailto:{{socialMediaData[1].emailUrl}}" class="hover:text-white transition">
      Email
    </a>
    <span>•</span>
    <a [href]="socialMediaData[0].instagramUrl" target="_blank" class="hover:text-white transition">
      Instagram
    </a>
  </p>

  <p class="text-xs mt-2">
    © 2025 Emma Photographie — Tous droits réservés.
  </p>

</footer>
  `,
  styles: ``
})
export class FooterComponent {
cdsService = inject(CommunDataSharedService);
socialMediaData = this.cdsService.data
}
