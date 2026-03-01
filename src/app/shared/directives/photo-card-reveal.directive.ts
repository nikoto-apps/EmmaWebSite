import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[photoCardReveal]',
  standalone: true,
})
export class PhotoCardRevealDirective implements OnInit, OnDestroy {
  /** Animate once or every time it enters/leaves viewport */
  @Input() once = true;

 @Input() delay = 0;
@Input() stagger = 30;
@Input() duration = 550;
@Input() threshold = 0.15;

  /** Move distance in px */
  @Input() y = 18;

  /** Slight zoom at start */
  @Input() scaleFrom = 0.98;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const node = this.el.nativeElement;

    // Initial state
    node.style.opacity = '0';
    node.style.transform = `translateY(${this.y}px) scale(${this.scaleFrom})`;
    node.style.filter = 'blur(4px)';
    node.style.willChange = 'opacity, transform, filter';

    // Transition setup
    node.style.transitionProperty = 'opacity, transform, filter';
    node.style.transitionTimingFunction = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
    node.style.transitionDuration = `${this.duration}ms`;

    // Stagger based on index among siblings
    const index = this.getSiblingIndex(node);
    const totalDelay = this.delay + index * this.stagger;
    node.style.transitionDelay = `${totalDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0) scale(1)';
          node.style.filter = 'blur(0px)';
          if (this.once) this.observer?.disconnect();
        } else if (!this.once) {
          node.style.opacity = '0';
          node.style.transform = `translateY(${this.y}px) scale(${this.scaleFrom})`;
          node.style.filter = 'blur(4px)';
        }
      },
      { threshold: this.threshold, rootMargin: '0px 0px -10% 0px' }
    );

    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private getSiblingIndex(node: HTMLElement): number {
    const parent = node.parentElement;
    if (!parent) return 0;
    return Array.from(parent.children).indexOf(node);
  }
}