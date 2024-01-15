import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goToReactive(): void {
    this.router.navigate(['contact-reactive'], { queryParams: { name: 'LEARNING' } })
  }

  goToTemplate(): void {
    this.router.navigate(['contact-template', '580']) //second parameter in path ->app.routing.modules.ts
  }

}
