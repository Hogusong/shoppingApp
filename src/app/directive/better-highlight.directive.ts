import { Directive, Renderer2, OnInit, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gray');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '18px');
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '5px');
    this.renderer.setStyle(this.elRef.nativeElement, 'margin-left', '200px');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gray');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
  }
}
