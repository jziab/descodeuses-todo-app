import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userlist } from '../models/userlist.model';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  private apiURL = 'api/userslist';
  constructor(private http: HttpClient) { }
  adduserlist(item : userlist ){
    return this.http.post<userlist>(this.apiURL, item)
  }
  getuserslist(){
return this.http.get<userlist[]>(this.apiURL);
}

getuserlist(id : number){
  return this.http.get<userlist>(this.apiURL + '/'+ id);
}
updateuserlist(item : userlist){
return this.http.put<userlist>(this.apiURL+'/'+ item.id, item)
}
deleteuserlist(id : number){
return this.http.delete<userlist>(this.apiURL+'/'+ id);
}
}


