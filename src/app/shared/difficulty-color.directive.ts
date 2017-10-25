import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDifficultyColor]'
})
export class DifficultyColorDirective implements AfterViewInit {
    element: ElementRef;

    constructor(el: ElementRef) {
        this.element = el;
    }

    ngAfterViewInit() {
        let originalValue: string = this.element.nativeElement.textContent;
        originalValue = originalValue.replace('(', '');
        originalValue = originalValue.replace(')', '');
        const value = +originalValue;

        if (value < 4) {
            this.element.nativeElement.style.setProperty('color', 'green');
        } else if (value < 7) {
            this.element.nativeElement.style.setProperty('color', 'orange');
        } else {
            this.element.nativeElement.style.setProperty('color', 'red');
        }
    }
}
