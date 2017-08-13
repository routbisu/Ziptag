import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bar: string;

  constructor() { 
    console.log('Constructor ran..');
  }

  ngOnInit() {
    this.bar = 'Foo';
  }

  update(txtValue) {
    this.bar = txtValue;
  }
}
