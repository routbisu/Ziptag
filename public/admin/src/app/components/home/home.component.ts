import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    // Set page title
    this.titleService.setTitle('Ziptag Admin Home')
  }

}
