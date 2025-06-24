import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  todos: Todo[] = [];

  //KPI //KeyPerformanceIndicators //Indicateur de performance clé 
 //tableau des cards dashboard
  kpis = [
    {id: 1, titre: 'a faire aujourd/hui',  icon:'event', color: '!bg-blue-500', value: 0},
    {id:2, titre: 'tâche en retard', icon:'warning', color: '!bg-red-500', value: 0},
    {id:3, titre: 'urgents', icon:'priority_high', color: '!bg-yellow-500', value: 0}
  ]

  constructor(private todoService : TodoService) {

  }

  //récuperer les todos (les données)
  ngOnInit(): void {
    this.fetchTodo();
  }

  fetchTodo() {
    //Communication asynchrone donc il faut s'inscrire pour avoir le retour
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      
      let today = new Date(); // ça c'est pour récuperer la date d'aujourd'hui
      //declarer  les 3 variables
      let countUrgent = 0,
          countToday = 0,
          countLate = 0;

        //une fois déclarer les variables on filtre .  

        // On filtre d'abord => Urgentes: priority = 1 && due date = Aujourd'hui
      countUrgent = this.todos.filter(c=>
        c.priority == '1' &&
        new Date(c.dueDate).toDateString() == today.toDateString()).length; 
       //on a converti la date en string avec la function .toDateString(). 
       // à fin d'utiliser le égal"==".
       // parce que "==" n'est pas utilisable. 
      

 //A faire aujourd'hui: due date = Aujourd'hui 

     // Avec la méthode filter
      /*countToday = this.todos.filter(c=>
        new Date(c.dueDate).toDateString() == today.toDateString()).length;*/


      //Avec la méthode @for of..
      for (const element of this.todos) {
        
        if (new Date(element.dueDate).toDateString() == today.toDateString()) {
         countToday++; 
          console.log(countToday);
        }
        
      }
      //Tache en retard: due date < Aujourd'hui

      ///avec la méthode filter
      /*countLate = this.todos.filter(c=>
         
         new Date(c.dueDate.toDateString() < toda.toDateString()).length;*/ 

      ///avec la méthode for 
      for (let i = 0; i < this.todos.length ; i++) {
        console.log(this.todos[i]);
         if( new Date(this.todos[i].dueDate).toDateString() < today.toDateString()){
          countLate++;
         }
      } 
      

          //mettre à jour dans le tableau la valeur de .value chaque index/item/element/c. 
            this.kpis[2].value = countUrgent;
            this.kpis[0].value = countToday;
             this.kpis[1].value = countLate;

     

    });
  }

  
 


}
