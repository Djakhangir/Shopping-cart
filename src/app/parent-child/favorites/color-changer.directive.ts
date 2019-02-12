import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.color = 'red';

    //this approach is not gonna work all the time. 
  }

}
