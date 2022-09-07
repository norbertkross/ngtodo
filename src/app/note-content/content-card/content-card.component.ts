import { Component, OnInit,ViewChild } from '@angular/core';
import { DataStateService } from 'src/_services/data-state.service';

@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  constructor(private service:DataStateService) { }
  state:DataStateService = this.service; 
  @ViewChild('textInput') thisInput?:HTMLTextAreaElement
  mouseEnterRegion:number = -1;

  showOptionsForIndex:boolean = false;

  showInputField:boolean = false;

  ngOnInit(): void {
  }

  userHoverOnTodoItem(index:number){
    this.mouseEnterRegion = index;
  }

  mouseLeft(){
    this.mouseEnterRegion = -1;
    this.showOptionsForIndex = false;

  }

  setOptions(value:boolean){
    this.showOptionsForIndex = value;
    console.log(`Set Options value ${value} ${this.showOptionsForIndex}`);    
  }

  switchTextInputState(){
    this.showInputField = !this.showInputField;
  }

  addToThisTodo(){
    if(this.thisInput?.value.length !=0){
      // this.state.
    }
  }
}
