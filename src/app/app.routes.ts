import { Routes } from '@angular/router';

export const routes: Routes = [
    {   path: '', redirectTo: 'aboutMe', pathMatch: 'full'  },
    {   path: 'aboutMe', loadComponent: () => import('./views/about-me/about-me.component').then(c => c.AboutMeComponent)  },
    {path: 'portfolio', loadComponent: () => import('./views/portfolio/portfolio.component').then(c => c.PortfolioComponent) }, 
    {path: 'services', loadComponent: () => import('./views/price/price.component').then(c => c.PriceComponent) }, 
    {   path: 'contact', loadComponent: () => import('./views/contact/contact.component').then(c => c.ContactComponent) },
];
