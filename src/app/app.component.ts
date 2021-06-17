import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MenuItem} from "./interface/menu-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      link: '/home'
    },
    {
      label: 'Overview',
      icon: 'layers',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      link: '/overview'
    },
    {
      label: 'Calculator',
      icon: 'calculate',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      link: '/calculate'
    },
    {
      label: 'Contact',
      icon: 'import_contacts',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      link: '/Contact'
    }
  ];

  ngOnInit() {
  }
}
