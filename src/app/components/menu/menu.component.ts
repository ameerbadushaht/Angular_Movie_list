import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  accessToken: string | null;
  currentRole: string | null;
  constructor(private authService: AuthService) {
    this.accessToken = this.authService.getToken();


  }


  ngOnInit(): void {
    this.currentRole=localStorage.getItem('user');
    console.log('current user is',this.currentRole)
  }
  logout(): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign out!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sign out!",
          text: "Signed out successfully.",
          icon: "success"
        });
        this.authService.logout();
        window.location.reload();
      }
    });

  }
}
