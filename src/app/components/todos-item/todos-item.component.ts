import { Component,input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-item',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.scss'
})
export class TodosItemComponent {
  todo = input.required<Todo>();
  todoTogggle = output<Todo>();

  todoClicked() {
    this.todoTogggle.emit(this.todo());
  }
}
