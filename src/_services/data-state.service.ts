import { Injectable } from '@angular/core';
import { AllNotes } from 'src/modules_and_interfaces/allNotesInterface';
import { InTODOlist } from 'src/modules_and_interfaces/inTODOlist';

@Injectable({
  providedIn: 'root'
})


export class DataStateService {
  allNotes: AllNotes[] = [{id: (Math.random() * 10).toString(), name: "Demo Todo", description: "This is your demo todo", createdAt: new Date().toUTCString(),completed:false}];
  noteName: string = "";
  noteDescription: string = "";

  // Hold Data for any route a user   
  noteContentRouteDetails: {} = {};

  newNoteTitle?:HTMLInputElement;
  newNoteDescription?:HTMLTextAreaElement;

  inTodoListItems?: InTODOlist[] = [
    {done:false,text:"Hello der!",time_added: new Date()},
    {done:false,text:"how are you",time_added: new Date()},
    {done:false,text:"doing today of all",time_added: new Date()},
  ];



  setNoteRouteDetails(value:{}){
    this.noteContentRouteDetails = value;
  }   

  addNewNote(newNote:AllNotes){
      this.allNotes.push(newNote)
  }

  constructor() { }
}
