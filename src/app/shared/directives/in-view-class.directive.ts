import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[inViewClass]',
  standalone: true,
})
export class InViewClassDirective implements OnInit, OnDestroy {
  @Input() inViewClass = 'animate-in';
  @Input() once = true;
  @Input() threshold = 0.5;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const node = this.el.nativeElement;

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add(this.inViewClass);
        if (this.once) this.observer?.disconnect();
      } else if (!this.once) {
        node.classList.remove(this.inViewClass);
      }
    }, { threshold: this.threshold });

    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}