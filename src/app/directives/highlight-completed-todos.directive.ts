import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodos]'
})
export class HighlightCompletedTodosDirective {
  isCompleted = input(false);
  el = inject(ElementRef);
  styylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
      this.el.nativeElement.style.color = 'black';
    } else {
      this.el.nativeElement.style.backgroundColor = 'transparent';
      this.el.nativeElement.style.color = 'inherit';
    }
  })
  constructor() { }

}
