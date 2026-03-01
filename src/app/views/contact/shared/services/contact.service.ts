import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ContactPayload } from '../data/contactData';
import emailJS from '@emailjs/browser';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  isSubmitting = signal<boolean>(false);  
  sent = signal<boolean>(false);


async send(payload: ContactPayload)  {
  const formatedDate= payload.preferredDate?.replace(/\//g, '.');
  console.log(formatedDate);
  emailJS.init(environment.emailjs.publicKey);
  await emailJS.send(environment.emailjs.serviceId, environment.emailjs.templateId, {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    sessionType: payload.sessionType,
    preferredDate: formatedDate,
    message: payload.message,
  })
    
  }

  constructor() { }
}
