import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { userlist } from '../models/userlist.model';

@Injectable({
  providedIn: 'root'
})
// API virtuelle mock
// 'InMemory' 
export class InMemoryDataService  implements InMemoryDataService{

  constructor() { }
  createDb(){
       const todos : Todo[] = [
      //Urgentes: priority = 1 Et due date = Aujourd'hui
      {id:1, title:'Appeler Secu', completed: false, priority:'1', dueDate:new Date().toISOString(), description:null},

      //A faire aujourd'hui: due date = Aujourd'hui
      {id:2, title:'Envoyer email', completed: false, priority:null, dueDate:new Date().toISOString(), description: null},

      //Tache en retard: due date < Aujourd'hui
      {id:3, title:'Declaration impot', completed: false, priority:null, dueDate:new Date(2025,5,1).toISOString(), description:null},

      //Tache en retard: due date < Aujourd'hui
      {id:4, title:'Envoyer CV', completed: false, priority:null, dueDate:new Date(2025,5,2).toISOString(), description: null},
    ];

    const userslist: userlist[] = [
      {id: 1, nom: 'user1', prenom:'user 12', genere: 'femme', username:'user123'},
       {id: 2, nom: 'user1', prenom:'user 12', genere: 'homme', username:'user4563'}
    ]
    return {todos, userslist}; //un lien endpoint api / todos
  }
}
