import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
constructor(private formBuilder : FormBuilder){

}
ngOnInit(): void{
  this.signUp = this.formBuilder.group({
   Nom: ['', [Validators.required]],
   prenom: ['', [Validators.required]],
   username: ['', [Validators.required]],
   password: ['',[Validators.required]]
  })
}
onSubmit(){
  if (this.signUp.valid) {
    console.log(this.signUp.value)
  }
}
}
