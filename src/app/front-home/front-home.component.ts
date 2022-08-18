import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-home',
  templateUrl: './front-home.component.html',
  styleUrls: ['./front-home.component.scss']
})
export class FrontHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.router.navigate(["/home"])
  }

}
