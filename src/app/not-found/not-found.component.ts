import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: '<h4>This page was not found!</h4>'
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=> {
      this.router.navigate(['/recipes']);
    }, 2000)
  }

}
