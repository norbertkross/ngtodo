import { Injectable } from '@angular/core';
import { AllNotes } from 'src/modules_and_interfaces/allNotesInterface';

@Injectable({
  providedIn: 'root'
})
export class DataStateService {
  allNotes: AllNotes[] = [{id: (Math.random() * 10).toString(), name: "Demo Todo", description: "This is your demo todo", createdAt: new Date().toUTCString(),completed:false}];
  noteName: string = "";
  noteDescription: string = "";

  // Hold Data for any route a user   
  noteContentRouteDetails: {} = {};


  setNoteRouteDetails(value:{}){
    this.noteContentRouteDetails = value;
  }   

  addNewNote(newNote:AllNotes){
      this.allNotes.push(newNote)
  }

  constructor() { }
}
