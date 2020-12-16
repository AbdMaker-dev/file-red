import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.scss']
})
export class ListCompetenceComponent implements OnInit {

  @Input() competences: any;
  constructor() { }

  ngOnInit(): void {
  }

}
