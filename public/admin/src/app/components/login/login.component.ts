import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  isAuthFailed: boolean = false;

  constructor() { 
    console.log('Constructor ran..');
  }

  ngOnInit() {
  }
}
