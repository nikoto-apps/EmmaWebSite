import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const element = this.el.nativeElement;

    element.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-1000');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove('opacity-0', 'translate-y-6');
          element.classList.add('opacity-100', 'translate-y-0');
          this.observer.disconnect(); 
        }
      },
      { threshold: 0.2 } 
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}