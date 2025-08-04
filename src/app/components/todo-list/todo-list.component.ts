import { Component, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  formGroup: FormGroup;
  todos: Todo[] = [];

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private snackbar: MatSnackBar
  ) {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.fetchTodo();
  }
  fetchTodo() {
    //Communication asynchrone donc il faut s'inscrire pour avoir le retour
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      console.log(data)
    });
  }
  onAddTodo() {
    console.log('click add');
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;
      const todo: Todo = {
        id: null,
        title: formValue.title,
        completed: false,
        priority: null,
        dueDate: '',
         description: null,

      };
      this.todoService.addTodo(todo).subscribe((data) => {
        //Actualiser la liste apres l'ajout
        this.fetchTodo();
      });
    }
  }
  //deleteTodo(id : number)
  deleteTodo(id: number | null) {
    if (id == null) {
      return;
    }
    console.log('click');
    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodo();
      this.snackbar.open('Deleted!', '');
    });
  }

  //CheckTodo

  onCheckChange(event: MatCheckboxChange, todo: Todo) {
    console.log('check:', event.checked);
    todo.completed = event.checked;
    this.todoService.updateTodo(todo).subscribe((data) => {
      this.fetchTodo();
    });
  }
}
