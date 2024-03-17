import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subject, Subscription } from 'rxjs';
import { SessionStorageService } from '../session-storage.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  fullCurrentUserName:any
  currentUserName: any
  sessionStorageSubscription: Subscription = new Subscription;

  constructor(private router: Router, private sessionStorageService: SessionStorageService) { }
  ngOnDestroy(): void {
    this.sessionStorageSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.getCurrentUserName()
    this.sessionStorageSubscription = this.sessionStorageService.getSessionStorageChanges()
      .subscribe((newValue) => {
        this.currentUserName = newValue;
      });
  }
  getCurrentUserName(){
    this.fullCurrentUserName=sessionStorage.getItem('currentUserName')
    this.currentUserName = sessionStorage.getItem('currentUserName')?.substring(0,sessionStorage.getItem('currentUserName')?.indexOf(" "));
    if(this.currentUserName.length==0){
      this.currentUserName=this.fullCurrentUserName;
    }
    console.log("ccc-----------",this.currentUserName)
  }
  addRecipe() {
    this.router.navigate(["recipe/add-recipe"])
  }
  allRecipe() {
    this.router.navigate(["recipe/all-recipe"])
  }
  login() {
    this.router.navigate(["user/login"])
  }
  register() {
    this.router.navigate(["user/register"])
  }
  logOut() {
    this.router.navigate(["user/log-out"])
  }
  home() {
    this.router.navigate(["home"])

  }
}
