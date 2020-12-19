import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.scss']
})
export class ListCompetenceComponent implements OnInit {

  @Input() competences: any;

  constructor(private alert: AlertService, private adminSrv: AdminService) { }

  ngOnInit(): void {
  }

  editeCmpt(id: number): void{
    console.log(id);
  }

  supCmpt(id: number): void{
    this.adminSrv.suppDataAdvice(id, 'admin/competences');
  }

}
