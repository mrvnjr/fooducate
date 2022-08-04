import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {

  active = '';

  NAV = [
    {
      name: 'Home',
      link: '/nav/home',
      icon: 'home'
    },
    {
      name: 'Meal Plan',
      link: '/nav/meal',
      icon: 'Calendar'
    },
    {
      name: 'Healthy Meals',
      link: '/nav/hmeal',
      icon: 'home'
    }
    
  ]
  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent)=> {
      this.active = event.url
    })
  }

  ngOnInit() {
  }

}
