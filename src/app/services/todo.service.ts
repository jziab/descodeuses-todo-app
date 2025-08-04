import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { environement } from '../../environements/enviroment';
//commande pour creer le fichier:
//ng g service todo

//Le service fait le lien entre le front et le back

//Il fait les operations CRUD: Create, Read, Update, Delete
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiURL = environement.apiUrl +'/api/action';
  //HttpClient pour communiquer avec le API/Backend
  constructor(private http: HttpClient) {}
  //CRUD

  //read
  //fetch list (recupere la list to do)
  getTodos() {
    //http get sans 2eme paramètre parce que il n y a pas de corps body
    return this.http.get<Todo[]>(this.apiURL);
  }
  //read
  //fetch item (recupere un seule item todo)
  getTodo(id: number) {
    return this.http.get<Todo>(this.apiURL + '/' + id);
  }
  // create
  addTodo(item: Todo) {
    return this.http.post<Todo>(this.apiURL, item);
  }
  //update
  updateTodo(item: Todo) {
    return this.http.put<Todo>(this.apiURL + '/' + item.id, item);
  }
  //supprimer
  deleteTodo(id: number) {
    return this.http.delete<Todo>(this.apiURL + '/' + id);
  }
}
