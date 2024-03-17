import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../classes/user.class';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',

  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.scss'
})
export class LogOutComponent implements OnInit {

  public name!: string
  constructor(private readonly _userService: UserService, private router: Router) { }
  ngOnInit(): void {
    Swal.fire({
      title: "Are you sure that you whant to log out?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("currentUserName")
        sessionStorage.clear()
        Swal.fire({
          title: "you log out!!!",
          text: "Your file has been deleted.",
          icon: "success"
        }).then(() => {
          this.toHome()
        });
      }
    });

  }
  toHome() {
    this.router.navigate(["home"])
  }
}
