import { Directive,effect,ElementRef,inject,input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);

  el = inject(ElementRef);
  stylesEffect = effect(() =>{

      if(this.isCompleted()){
        this.el.nativeElement.style.textDecoration = 'line-through';
        this.el.nativeElement.style.backgroundColor = 'white';
        this.el.nativeElement.style.color = 'black';
        this.el.nativeElement.style.opacity = 0.5;
      } else{
        this.el.nativeElement.style.textDecoration = 'none';
        this.el.nativeElement.style.backgroundColor = 'white';
        this.el.nativeElement.style.color = 'black';
        this.el.nativeElement.style.opacity = 1.0;
      }
    });
}
