import { importProvidersFrom, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatSelectModule} from '@angular/material/select';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UserlistComponent } from './components/userlist/userlist.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppCalculatriceTailwindComponent } from './app-calculatrice-tailwind/app-calculatrice-tailwind.component';
import { MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule } from '@angular/material/autocomplete';
import { authInterceptor } from './auth/auth.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    SignUpComponent,
    TodoListComponent,
    UserlistComponent,
    TodoDetailComponent,
    TodoTableComponent,
    DashboardComponent,
    AppCalculatriceTailwindComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatFormFieldModule,
    MatFormField,
      MatChipsModule,
    MatAutocompleteModule,
    
   
  ],
  //injecter in-memory-data.service.ts
    //comme il est @Injectable
  providers: [
   provideHttpClient(
    withInterceptors([
        authInterceptor
      ])
   ),
    //importProvidersFrom([HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:200})]),
    provideNativeDateAdapter(),
    {provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
