import { Component } from '@angular/core';


@Component({
  selector: 'app-app-calculatrice-tailwind',
  standalone: false,
  templateUrl: './app-calculatrice-tailwind.component.html',
  styleUrl: './app-calculatrice-tailwind.component.css'
})
export class AppCalculatriceTailwindComponent {
nombres=[7,8,9,4,5,6,1,2,3,0];
operators=['+','x', '-','/'];
}
