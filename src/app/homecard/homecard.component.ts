import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.scss']
})
export class HomecardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quickAccessItems: CardItem[] = [
    {"msg":"Hello","description":"description goes here"},
    {"msg":"Hello","description":"Goes here"},
    {"msg":"Hello","description":"description here"},
    {"msg":"Hello","description":"Goes erfre here"},
  ]

}



export interface CardItem{
  msg:string,
  description:string
}
