import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStateService } from 'src/_services/data-state.service';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss']
})
export class NoteContentComponent implements OnInit {

  constructor(private appState: DataStateService,private routeInfo: ActivatedRoute) { }

  nameId: string = "";


  ngOnInit(): void {
    this.routeInfo.params.subscribe(params => {
      this.appState.setNoteRouteDetails({name: params['name'],id: params['id'],})
      this.nameId = `name: ${params['name']}, id: ${params['id']},`
   });    
  }

}
