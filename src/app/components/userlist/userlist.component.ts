import { Component, OnInit } from '@angular/core';

import { userlist } from '../../models/userlist.model';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-userlist',
  standalone: false,
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
  userslist : userlist[] = [];
  constructor(private userlistService:UserlistService){}
 ngOnInit(): void {
   this.userlistService.getuserslist().subscribe((data) =>{
    this.userslist = data;
   })
  }
}
