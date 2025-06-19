import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [NgIf, TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})

export class TodosComponent implements OnInit {
  todoService = inject(TodosService)
  todoItems = signal<Array<Todo>>([]);
  dataLoading = signal(true);
  searchTerm = signal('');
  ngOnInit(): void{
    console.log(this.todoService.todoItems);
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.error('Error fetching todos:', err);
          this.dataLoading.set(false);
          throw err;
        })
      ).subscribe((todos) => {
        this.todoItems.set(todos);
        this.dataLoading.set(false);
        console.log('Todos fetched successfully:', todos);
      })
  }
}
