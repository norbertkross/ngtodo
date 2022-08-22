import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AllNotes } from 'src/modules_and_interfaces/allNotesInterface';
import { DataStateService } from '../../_services/data-state.service';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.scss']
})
export class HomecardComponent implements OnInit {

  constructor(private router:Router,private stateStore:DataStateService ) { }

  ngOnInit(): void {
  }

  quickAccessItems: AllNotes[] = this.stateStore.allNotes;
  // quickAccessItems: CardItem[] = [
  //   {"msg":"Hello","description":"description goes here"},
  //   {"msg":"Hello","description":"Goes here"},
  //   {"msg":"Hello","description":"description here"},
  //   {"msg":"Hello","description":"Goes erfre here"},
  // ]

  goToNoteContent(){
    console.log("Going To Details");
    // this.router.navigate(["/home"])
    this.router.navigate(["/note","my note name","3535"])
    
  }

}



// export interface CardItem{
//   msg:string,
//   description:string
// }
