import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [{
    userId: 1,
    completed: false,
    title: 'Sample Todo',
    id: 1,
    description: 'This is a sample todo item for demonstration purposes.'
  },
  {
    userId: 2,
    completed: true,
    title: 'Completed Todo',
    id: 2,
    description: 'This todo item has been completed.'
  },
  {
    userId: 3,
    completed: false,
    title: 'Another Todo',
    id: 3,
    description: 'This is another todo item with a description.'
  }
]
  constructor() { }
}
