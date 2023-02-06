import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent {
  userssdata: any;
  constructor(private UserService: UserService, private httpClient: HttpClient){}

  ngOnInit(){
    this.UserService.Getusers().subscribe((response: any) =>{
      console.log(response);
      this.userssdata=response;
    })
  }
}
