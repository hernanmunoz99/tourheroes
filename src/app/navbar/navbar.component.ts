import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;

  @Input() title: string;
  @Input() navItems: { path: string; text: string }[];


  constructor() { }

  ngOnInit(): void {
  }

}
