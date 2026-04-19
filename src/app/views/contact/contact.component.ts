import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './shared/services/contact.service';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CommunDataSharedService } from '../../shared/commun-data-shared.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealOnScrollDirective],
  template: `
    <section revealOnScroll class="relative w-full min-h-screen bg-[#1A1C16] pt-24 pb-24">
      <header class="mx-auto max-w-6xl px-6 md:px-12 text-center pb-14">
        <p
          class="text-[#D5C8B0]/70 tracking-[0.25em] uppercase text-xs md:text-sm mb-6"
        >
          Me contacter
        </p>
        <h1
          class="text-[#D5C8B0] font-light tracking-tight text-4xl md:text-6xl lg:text-7xl leading-[1.05]"
        >
          Parlons de votre séance
        </h1>
        <p
          class="mt-6 text-[#D5C8B0]/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Dites-moi ce que vous imaginez : je vous réponds rapidement avec une
          proposition adaptée (disponibilités, lieu, ambiance).
        </p>
        <div class="mt-10 h-px w-24 mx-auto bg-white/10"></div>
      </header>

      <div class="mx-auto max-w-6xl px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div class="relative overflow-hidden min-h-[420px] lg:min-h-[640px]">
            <img
              src="assets/images/contactImg.webp"
              alt="Contact - mood"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-black/35"></div>

            <div
              class="relative z-10 p-8 md:p-12 flex flex-col justify-end h-full"
            >
              <p
                class="text-[#D5C8B0]/90 text-xl md:text-2xl font-light leading-snug max-w-md"
              >
                “Une séance photo, c’est avant tout un moment simple, doux, et
                vrai.”
              </p>

              <div class="mt-8 space-y-2 text-[#D5C8B0]/80 text-sm">
                <p>
                  <span class="text-[#D5C8B0]">Email :</span> <a href="mailto:{{dataShared[1].emailUrl}}" class="text-[#D5C8B0]/80 hover:text-[#D5C8B0]"> {{dataShared[1].emailUrl}}</a>
                </p>
                <p><span class="text-[#D5C8B0]">Instagram :</span> <a href="{{dataShared[0].instagramUrl}}" target="_blank" class="text-[#D5C8B0]/80 hover:text-[#D5C8B0]"> {{dataShared[0].instagramUrl}}</a></p>
                <p>
                  <span class="text-[#D5C8B0]">Zone :</span> Paris • Oises • Ile
                  de France
                </p>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class=" border border-white/10 bg-white/5 p-8 md:p-12">
            <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-6">
              <!-- Name -->
              <div>
                <label class="block text-[#D5C8B0]/85 text-sm mb-2"
                  >Nom complet *</label
                >
                <input
                  type="text"
                  formControlName="name"
                  placeholder="Ex : Jean Lemoine"
                  class="w-full bg-[#0f100d] border border-white/10
                         px-4 py-3 text-[#D5C8B0] placeholder:text-[#D5C8B0]/35
                         focus:outline-none focus:ring-2 focus:ring-white/10"
                />
                <p class="mt-2 text-xs text-red-300" *ngIf="showError('name')">
                  Merci d’indiquer votre nom (min. 2 caractères).
                </p>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-[#D5C8B0]/85 text-sm mb-2"
                  >Email *</label
                >
                <input
                  type="email"
                  formControlName="email"
                  placeholder="exemple@mail.com"
                  class="w-full  bg-[#0f100d] border border-white/10
                         px-4 py-3 text-[#D5C8B0] placeholder:text-[#D5C8B0]/35
                         focus:outline-none focus:ring-2 focus:ring-white/10"
                />
                <p class="mt-2 text-xs text-red-300" *ngIf="showError('email')">
                  Merci d’indiquer un email valide.
                </p>
              </div>

              <!-- Phone (optional) -->
              <div>
                <label class="block text-[#D5C8B0]/85 text-sm mb-2"
                  >Téléphone (optionnel)</label
                >
                <input
                  type="tel"
                  formControlName="phone"
                  placeholder="06 00 00 00 00"
                  class="w-full  bg-[#0f100d] border border-white/10
                         px-4 py-3 text-[#D5C8B0] placeholder:text-[#D5C8B0]/35
                         focus:outline-none focus:ring-2 focus:ring-white/10"
                />
              </div>

              <!-- Session type + date -->
              <div class="items-center grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-[#D5C8B0]/85 text-sm mb-2"
                    >Type de séance *</label
                  >
                  <select
                    formControlName="sessionType"
                    class="w-full  bg-[#0f100d] border border-white/10
                           px-4 py-3 text-[#D5C8B0]
                           focus:outline-none focus:ring-2 focus:ring-white/10"
                  >
                    <option value="" disabled>Choisir…</option>
                    <option value="couple">Couple</option>
                    <option value="maternite">Maternité</option>
                    <option value="nouveau-ne">Nouveau-né</option>
                    <option value="famille">Famille</option>
                    <option value="mariage">Mariage</option>
                  </select>
                  <p
                    class="mt-2 text-xs text-red-300"
                    *ngIf="showError('sessionType')"
                  >
                    Merci de sélectionner un type de séance.
                  </p>
                </div>

                <div>
                  <label class="block text-[#D5C8B0]/85 text-sm mb-2"
                    >Date souhaitée (optionnel)</label
                  >
                  <input
                    type="date"
                    formControlName="preferredDate"
                    class="w-full  bg-[#0f100d] border border-white/10
                           px-4 py-3 text-[#D5C8B0]
                           focus:outline-none focus:ring-2 focus:ring-white/10"
                  />
                </div>
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="block text-[#D5C8B0]/85 text-sm mb-2"
                  >Votre message *</label
                >
                <textarea
                  id="message"
                  rows="6"
                  formControlName="message"
                  placeholder="Lieu, ambiance, nombre de personnes, contraintes, questions…"
                  class="w-full  bg-[#0f100d] border border-white/10
                         px-4 py-3 text-[#D5C8B0] placeholder:text-[#D5C8B0]/35
                         focus:outline-none focus:ring-2 focus:ring-white/10"
                ></textarea>
                <p
                  class="mt-2 text-xs text-red-300"
                  *ngIf="showError('message')"
                >
                  Merci d’écrire un message (min. 10 caractères).
                </p>
              </div>

              <!-- Submit -->
              <div class="pt-2 flex items-center gap-4">
                <button
                  type="submit"
                  [disabled]="form.invalid || isSubmitting()"
                  class=" px-6 py-3 border border-white/10
                         bg-[#D5C8B0]/10 text-[#D5C8B0]
                         hover:bg-[#D5C8B0]/15 transition
                         disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ isSubmitting() ? 'Envoi…' : 'Envoyer' }}
                </button>

                <p class="text-[#D5C8B0]/70 text-sm" *ngIf="sentMessage()">
                  Message envoyé. Je reviens vers vous au plus vite.
                </p>
              </div>

              <p class="text-[#D5C8B0]/55 text-xs leading-relaxed pt-4">
                Astuce : pour une réponse plus rapide, indiquez votre ville et
                vos disponibilités (semaine / week-end).
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  dataSharedService = inject(CommunDataSharedService);
  dataShared = this.dataSharedService.data;
  isSubmitting = this.contactService.isSubmitting;
  sentMessage = this.contactService.sent;
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    sessionType: ['', [Validators.required]],
    preferredDate: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  showError(field: keyof typeof this.form.controls) {
    const c = this.form.controls[field];
    return c.invalid && (c.dirty || c.touched);
  }

   submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    const payload = this.form.getRawValue();

    this.isSubmitting.set(true);
    this.sentMessage.set(true);
    this.contactService.send({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      sessionType: payload.sessionType,
      preferredDate: payload.preferredDate,
      message: payload.message,
    });
    this.isSubmitting.set(false);
    this.sentMessage.set(false);
    this.form.reset();
   }
}
