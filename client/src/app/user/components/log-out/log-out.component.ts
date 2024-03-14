import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../classes/user.class';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  // standalone: true,
  // imports: [],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.scss'
})
export class LogOutComponent implements OnInit {
  // public LogOutForm!: FormGroup;
  // public user!: User
  public name!:string
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
        // this.name=sessionStorage.getItem("currentUserName")?.toString()
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
    // this.LogOutForm = new FormGroup({
    //   "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      
    // })
  }

  // logOut() {
  //   console.log("name::   ",this.LogOutForm.value)
  //   this._userService.getUserByName(this.LogOutForm.value.name).subscribe({
  //     next: (res) => {
  //       // console.log(res);
  //       this.user = res;
  //       console.log(this.user)
  //       if (this.user == null) {
  //         Swal.fire({
  //           icon: "info",
  //           title: "Oops...",
  //           text: "Note! You are not registered in the system",
  //           // footer: '<a href="#">Why do I have this issue?</a>'
  //         });
  //         return
  //       }
  //       sessionStorage.setItem('name', "");
  //       sessionStorage.setItem('isGetFromLogin', 'false')
  //       sessionStorage.setItem('isGetFromRegister', 'false')
  //       this._userService.deleteUser(this.LogOutForm.value.name).subscribe({
  //         next: (res) => {
  //           // console.log(res);
  //           this.user = res;
  //           console.log(this.user)
  //             Swal.fire({
  //               icon: "info",
  //               text: ` User log out!!`,
  //               // footer: '<a href="#">Why do I have this issue?</a>'
  //             });
  //             this.toHome()
  //         },
  //         error: (err) => {
  //           console.log(err);

  //         }
  //       })
  //     },
  //     error: (err) => {
  //       console.log(err);

  //     }
  //   })
  // }
  toHome(){
    this.router.navigate(["home"])
  }
}
