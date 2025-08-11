import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})


export class SignUpComponent implements OnInit{

  listGenre = [
    { text:'Femme', value:'f'},
    { text:'Homme', value:'h'}
  ]
signUp!:FormGroup;
constructor(
  private formBuilder: FormBuilder,
   private authService: AuthService,
  private router: Router
) {}
ngOnInit(): void {
  this.signUp = this.formBuilder.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    password: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.email]],
  
  });
}
onSubmit() {
  console.log(this.signUp.value)
  if (this.signUp.valid) {
    console.log(this.signUp.value)
    const data = this.signUp.value;
    this.authService.signup(data).subscribe({
      next: (res) => {
        alert('Inscription réussie !');
        this.router.navigate(['/login']); // ou autre route
      },
      error: (err) => {
        alert('Erreur : ' + err.error);
        console.error(err);
      }
    });
    
  }
}
}
