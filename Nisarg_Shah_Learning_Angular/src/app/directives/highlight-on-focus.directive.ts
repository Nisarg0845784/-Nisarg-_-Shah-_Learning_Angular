import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input() appHighlightOnFocus = '';
  constructor(private el: ElementRef) { }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('focus') onFocus(){
    this.highlight(this.appHighlightOnFocus || 'blue');
  }

  @HostListener('blur') onBlur(){
    this.highlight('');
  }
}
