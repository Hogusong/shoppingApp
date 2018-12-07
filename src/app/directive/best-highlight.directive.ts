import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit {
  @Input() default: string;
  @Input() highlight: string;
  @Input() testVariable: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.fontSize') fontSize: string;
  @HostBinding('style.padding') padding: string;
  @HostBinding('style.color') color: string;
  
  constructor() { }

  ngOnInit() {  
    this.backgroundColor = this.default;
    this.fontSize = '20px';
    this.padding = '10px';
    this.color = 'yellow';
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    console.log(this.testVariable);
    this.backgroundColor = this.highlight;
    this.color = 'black';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.default;
    this.color = 'yellow';
  }
}
