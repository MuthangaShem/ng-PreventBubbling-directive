import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[PreventBubbling]'
})
export class PreventBubblingDirective {

	element: ElementRef;

  constructor(private el: ElementRef) {
  	el.nativeElement.style.color = "red"
  	this.element = el;
  	console.log(this.element)
  }

  @HostListener("click", ["$event"])
    public onClick(event: any): void
    {
        event.stopPropagation();
    }
}
