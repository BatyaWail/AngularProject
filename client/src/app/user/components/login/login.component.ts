import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../classes/user.class';
import { UserService } from '../../user.service';
import Swal from 'sweetalert2';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public LoginForm!: FormGroup;
  public user!: User
  private timerInterval: any;
  private timer: any;
  private path?: string;
  constructor(private _userService: UserService, private router: Router) { }
  ngOnInit(): void {
    var isGet = sessionStorage.getItem('isGetFromRgister')
    if (isGet == 'true') {
      console.log("goodLogin")
      this.LoginForm = new FormGroup({
        "name": new FormControl(sessionStorage.getItem('currentUserName'), [Validators.required, Validators.minLength(3)]),
        "password": new FormControl("", [Validators.required, Validators.minLength(6)]),

      })
    }
    else {
      this.LoginForm = new FormGroup({
        "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
        "password": new FormControl("", [Validators.required, Validators.minLength(6)]),

      })
    }
    sessionStorage.setItem('isGetFromLogin', 'false')
    this.path = sessionStorage.getItem("isPath")?.toString()
    console.log("path", this.path)
  }
  login() {
    this._userService.getUserByName(this.LoginForm.value.name).subscribe({
      next: (res) => {
        // console.log(res);
        this.user = res;
        console.log(this.user)
        sessionStorage.setItem('currentUserName', this.LoginForm.value.name);
        if (this.user != null) {
          this.checkPassword()
          console.log("inside check");

        }
        else {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "User does not exist yet, transferred to registration page!!!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
          // sessionStorage.setItem('name', this.LoginForm.value.name);
          sessionStorage.setItem('isGetFromLogin', 'true')
          // this.router.navigate(["user/register"])
          this.toRegister()

        }
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  checkPassword() {
    if (this.user.password == this.LoginForm.value.password) {
      console.log("this.path",this.path)
      if (this.path ===undefined) {
        console.log("go to recipy");
        Swal.fire({
          title: 'you login!!!!',
          html: 'Transferred to show the recipes',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading(null);
            this.timer = Swal
            this.timerInterval = setInterval(() => {
              this.timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(this.timerInterval);
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
          }
        });
        this.router.navigate(["recipe"])
      }
      else{
        let id=sessionStorage.getItem("recipe-details")
        console.log(id)
        // this.router.navigate([`${{this.path}}`])
        if(id!=null){
          console.log("id",id)
          this.router.navigate(["recipe/recipe-details/", parseInt(id)]);
        }
        else if(sessionStorage.getItem("add-recipe")==="true"){
          this.router.navigate(["recipe/add-recipe"]);

        }
      }
    }
    else {
      console.log("errory");

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Paswword Incorrect!!!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }
  toRegister() {
    this.router.navigate(["user/register"])

  }

}
