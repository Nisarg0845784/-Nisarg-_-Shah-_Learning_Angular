import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input() appHoverHighlight = '';
  constructor(private el: ElementRef) { }
  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHoverHighlight || 'yellow');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

}
