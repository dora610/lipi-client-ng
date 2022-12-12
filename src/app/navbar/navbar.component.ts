import { Component, OnInit } from '@angular/core';
import { NavElement } from '../Interfaces/NavElement';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navElementsArr: NavElement[]

  constructor() {
    this.navElementsArr = [
      {
        navTitle: 'Home',
        url: '/home'
      },
      {
        navTitle: 'Trending',
        url: '/trending'
      },
      {
        navTitle: 'Following',
        url: '/following'
      },
      {
        navTitle: 'Your Feed',
        url: '/feed'
      },
      {
        navTitle: 'Login',
        url: '/login'
      },
      {
        navTitle: 'SignUp',
        url: '/signup'
      },
    ]
   }

  ngOnInit(): void {
  }

}
