import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  users:any[]

  constructor(private authService: AuthService) { }
  ngOnInit(): void {

    this.authService.getUsers().subscribe((data) => {
      this.users = data;
      console.log('here user ng oninit', data);
    });


    
  }

  deleteUser(id:any){

  }
  blockUser(id:any){

  }
}
