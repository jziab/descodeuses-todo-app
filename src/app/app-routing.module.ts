import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppCalculatriceTailwindComponent } from './app-calculatrice-tailwind/app-calculatrice-tailwind.component';
import { authGuard } from './core/auth.guard';


const routes: Routes = [
  {
    path:'login', component:LoginComponent, 
  },
  
    {
    path: 'sign-up', component: SignUpComponent,
  },
 {
    path: 'TodoList', component: TodoListComponent,
  },
  {
    path: 'userlist', component: UserlistComponent,

  },
   {
    path: 'todo-detail/:id', component: TodoDetailComponent,
    
  },
  {
    path: 'todo-table', component: TodoTableComponent,
    
  },
    {
    path: '', component: DashboardComponent, canActivate: [authGuard]
    
  },
  {path:'app-calculatrice', component: AppCalculatriceTailwindComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
