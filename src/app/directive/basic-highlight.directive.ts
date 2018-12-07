import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef){  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.fontSize = '24px';
    this.elementRef.nativeElement.style.padding = '20px';
    this.elementRef.nativeElement.style.color = 'white';
  }
}