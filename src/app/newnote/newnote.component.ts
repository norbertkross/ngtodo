import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AllNotes } from 'src/modules_and_interfaces/allNotesInterface';
import { DataStateService } from 'src/_services/data-state.service';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.scss']
})
export class NewnoteComponent implements OnInit {

  constructor(private service:DataStateService) { }

  ngOnInit(): void {
  }

  title:string = ""
  description:string = ""
  theNote?:AllNotes

  @ViewChild('modalId') modalId?:ElementRef
  @ViewChild('noteTitle') noteTitle?:ElementRef
  @ViewChild('noteDescription') noteDescription?:ElementRef


  updateTitle(value:string){
    this.title = value
  }

  updateDescription(value:string){
    this.description = value
  }

  addToNotes(){
       
    this.theNote = 
        {
        id: (Math.random() * 100).toString(),
        name: this.title,
        description:this.description,
        completed: false,
        createdAt: (new Date()).toString(),
      }

      this.service.addNewNote(this.theNote)
      // data-bs-dismiss="modal"
      // this.modalId?.nativeElement.setAttribute("data-bs-dismiss","modal")
      this.noteTitle!.nativeElement.value = ""
      this.noteDescription!.nativeElement.value = ""
  }

}
