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
    this.loadParticlesJS();
  }

  /**
   * Load particles JS initializer
   */
  loadParticlesJS() {    
    var script = document.createElement('script');
    document.body.appendChild(script)
    script.src = 'assets/js/particlesjs/particles.init.js';
  }
}
