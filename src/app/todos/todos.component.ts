import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodosItemComponent } from '../components/todos-item/todos-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';


@Component({
  selector: 'todos',
  imports: [TodosItemComponent, FormsModule,FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService);
  todoItems =  signal<Array<Todo>>([]);
  searchTerm = signal('');
  ngOnInit(): void {
    
     // console.log(this.todoService.todoItems);
     this.todoService
     .getTodosFromApi()
     .pipe(
      catchError((err)=>{
        console.log(err);
        throw err;
      })
     )
     .subscribe((todos) => {
      this.todoItems.set(todos);
     });
     
  }

  updateTodoItem(todoItem: Todo){
    console.log("fine");
    this.todoItems.update((todos) => { 
      return todos.map( todo =>{
        if(todo.id == todoItem.id){
          return {
            ... todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }
}
